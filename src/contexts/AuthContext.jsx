import { Outlet, Navigate } from "react-router-dom";
import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";


const AuthContext = createContext();

// Provider functions
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  // axios config
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  // Update axios headers when auth changes
  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${auth?.token}`;
  }, [auth?.token]);

  // retrieve the user from local storage
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parsedData = JSON.parse(data);
      setAuth({ ...auth, user: parsedData.user, token: parsedData.user.token });
    }
  }, []);

  const login = async (identifier, password) => {
    try {
      const { data } = await axios.post("/auth/login", {
        identifier,
        password,
      });

      const result = data

      if (!data?.error) {
        // Clear the "recentlyViewed" data from local storage
      localStorage.removeItem("recentlyViewed");


        // Login successful
        setAuth({ user: data.user, token: data.user.token });
        localStorage.setItem("auth", JSON.stringify(data));
        return result;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Login error:", error.message);
      if (error?.response && error?.response?.data && error?.response?.data?.message) {
        throw new Error(error?.response?.data?.message); 
      } else {
        throw new Error("An error occurred while logging in");
      }
    }
  };

  // Signup function
  const signup = async (formData) => {
    try {
      const { data } = await axios.post("/auth/register", {...formData}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (data.success) {
        setAuth({
          user: data?.user,
          token: data?.user?.token,
        });

        // Save signup data to local storage
        localStorage.setItem("auth", JSON.stringify(data));
      }

      return data;
    } catch (error) {
      console.error("Signup Error:", error.message);
      if (error?.response && error?.response?.data && error?.response?.data?.message) {
        const msg = error?.response?.data?.message
        throw new Error(msg); 
      } 
    }
  };

  const logout = () => {
    // Clear auth data
    localStorage.removeItem("auth");
    setAuth({ user: null, token: "" });
  };

  
// Private Route
const PrivateRoutes = () => {
const data = localStorage.getItem("auth");
const parsedData = JSON.parse(data);
const isLoggedIn = parsedData;

  return isLoggedIn ? <Outlet/> : <Navigate to="/"/>

}

const AdminRoutes = () => {
  const data = localStorage.getItem("auth");
  const parsedData = JSON.parse(data);
  const isAdmin = parsedData.user.role === "admin";

    return isAdmin ? <Outlet/> : <Navigate to ="/"/>

}


  // console.log(auth.user);

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, signup, logout, PrivateRoutes, AdminRoutes }}>
      {children}
    </AuthContext.Provider>
  );

};

// hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
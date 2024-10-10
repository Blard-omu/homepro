import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import "react-toastify/dist/ReactToastify.css";
import LayoutContainer from "./components/layout/Layout.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { ModalProvider } from "./contexts/ModalContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      <AuthProvider>
        <Router>
          <LayoutContainer>
            <App />
          </LayoutContainer>
        </Router>
      </AuthProvider>
    </ModalProvider>
  </StrictMode>
);

import { useLocation, matchPath } from "react-router-dom";
import Footer from "./Footer";
import Menu from "./navs/Menu";


const LayoutContainer = ({ children }) => {
  const location = useLocation();

  const pathname = location?.pathname || '';

  const noNavOrFooterRoutes = ["/admin", "/*"];

  const definedRoutes = [
    "/",
    "/about",
    "/contact",
    "/listings",
    "/blog",
    "/detail",
    "/detail/:propertId", 
  ];

  const isKnownRoute = definedRoutes.some((route) =>
    matchPath({ path: route, exact: true }, pathname)
  );

  const ShowNavOrFooter = isKnownRoute && !noNavOrFooterRoutes.includes(pathname);

  return (
    <div className="2xl:container w-[100%] mx-auto h-auto min-h-[100vh] relative">
      {ShowNavOrFooter && <Menu />}
      {children}
      {ShowNavOrFooter && <Footer />}
    </div>
  );
};

export default LayoutContainer;

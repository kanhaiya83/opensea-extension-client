import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import LoadingPage from "../pages/LoadingPage";
import { useEffect } from "react";

const ProtectedRoute = () => {
  const { user, loading } = useAuthContext();
  const {pathname} = useLocation();
  const navigate = useNavigate()
  const unprotectedRoutes = ["/","/login","/register"]
  useEffect(()=>{
    if(user && (pathname==="/login" || pathname==="/register")){
      return navigate("/")
    }
  },[user,loading,pathname])
  if (loading) {
    return <LoadingPage />
  }
  if (!user && !unprotectedRoutes.includes(pathname)) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }
  
  return <Outlet />;
};

export default ProtectedRoute;

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import LoginPage from "./pages/Login";
import "./assets/styles/tailwind.css"

import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/Register";
// Create a client
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ProtectedRoute />}>
       <Route path="/login" element={<LoginPage  />} />
    
       <Route path="/register" element={<RegisterPage  />} />
      <Route path="/" element={<HomePage/>} />
      </Route>

      {/*<Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Route> */}
    </>
  )
);
function App() {
  return (
    <>
      <div className="bg-[#272727] text-white min-w-screen min-h-screen">
      <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;

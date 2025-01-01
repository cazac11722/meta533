import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/home/Dashboard";
import AdvertiserManagement from "./pages/advertiser/Advertiser_management";
import LandingManagement from "./pages/landing/Landing_management";
import MediaManagement from "./pages/media/Media_management";
import ApplicationManagement from "./pages/application/Application_management";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/meta533/login" element={<Login />}></Route>
          <Route path="/meta533/sign-up" element={<SignUp />}></Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/meta533/" element={<Dashboard />}></Route>

            <Route path="/meta533/a/m" element={<AdvertiserManagement />}></Route>
            <Route path="/meta533/l/m" element={<LandingManagement />}></Route>
            <Route path="/meta533/m/m" element={<MediaManagement />}></Route>
            <Route path="/meta533/ap/m" element={<ApplicationManagement />}></Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/home/Dashboard";
import AdvertiserManagement from "./pages/advertiser/Advertiser_management";
import LandingManagement from "./pages/landing/Landing_management";
import MediaManagement from "./pages/media/Media_management";
import ApplicationManagement from "./pages/application/Application_management";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/a/m" element={<AdvertiserManagement />}></Route>
          <Route path="/l/m" element={<LandingManagement />}></Route>
          <Route path="/m/m" element={<MediaManagement />}></Route>
          <Route path="/ap/m" element={<ApplicationManagement />}></Route>
          <Route element={<ProtectedRoute />}>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

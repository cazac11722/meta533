import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { PopupProvider } from "./contexts/hooks/usePopup";
import ProtectedRoute from "./contexts/ProtectedRoute";
import Dashboard from "./pages/home/Dashboard";
import AdvertiserManagement from "./pages/advertiser/Advertiser_management";
import LandingManagement from "./pages/landing/Landing_management";
import MediaManagement from "./pages/media/Media_management";
import ApplicationManagement from "./pages/application/Application_management";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUpPage";
import { useEffect, useState } from "react";
import LandingDetails from "./pages/landing/Landing_details";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/landing/landing-pages/user/1/");
        const result = await response.json();
        setData(result.map((e) => e.url));
        setLoading(false);
      } catch (err) {
        console.error("API 요청 중 오류 발생:", err);
        setError("Failed to fetch data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <AuthProvider>
      <PopupProvider>
        <Router>
          <Routes>
            {
              data.map((e,i) => (
                <Route key={i} path={`/l/v/${e}`} element={<LandingDetails url={e} />} />
              ))
            }
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="" element={<Dashboard />} />
              <Route path="/a/m" element={<AdvertiserManagement />} />
              <Route path="/l/m" element={<LandingManagement />} />
              <Route path="/m/m" element={<MediaManagement />} />
              <Route path="/ap/m" element={<ApplicationManagement />} />
            </Route>
          </Routes>
        </Router>
      </PopupProvider>
    </AuthProvider>
  );
}

export default App;

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
import { useEffect } from "react";
import LandingDetails from "./pages/landing/Landing_details";

const fetchData = async (data) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/landing/landing-pages/user/1/");
    let result = await response.json();
    for (const e of result) {
      data.push(e.url)
    }
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
  }
};

function App() {
  let data = [];
  useEffect(() => {
    fetchData(data);
  }, []);

  return (
    <AuthProvider>
      <PopupProvider>
        <Router>
          <Routes>
            {/* {
              data.map((e, i) => (
              ))
            } */}
            <Route path={`/`} element={<LandingDetails />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/sign-up" element={<SignUpPage />}></Route>

            <Route element={<ProtectedRoute />}>
              <Route path="" element={<Dashboard />}></Route>
              <Route path="/a/m" element={<AdvertiserManagement />}></Route>
              <Route path="/l/m" element={<LandingManagement />}></Route>
              <Route path="/m/m" element={<MediaManagement />}></Route>
              <Route path="/ap/m" element={<ApplicationManagement />}></Route>
            </Route>
          </Routes>
        </Router>
      </PopupProvider>
    </AuthProvider>
  );
}

export default App;

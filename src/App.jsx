import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NavbarSection from "./General/Sections/NavbarSection";
import FooterSection from "./General/Sections/FooterSection";
import WelcomePage from "./General/Pages/WelcomePage";
import BarbershopHomePage from "./barbershop/Pages/BarbershopHomePage";
import AdminHomePage from "./admin/Pages/AdminHomePage";
import LoginPage from "./General/Pages/LoginPage";
import PrivateRoute from "./General/Guard/PrivateRoute";
import HomePage from "./General/Pages/HomePage";
import RegisterPage from "./General/Pages/RegisterPage";

export default function App() {
  return (
    <BrowserRouter>
      <NavbarSection />
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register/:role" element={<RegisterPage />} />
            <Route element={<PrivateRoute requiredRoles={['ROLE_CUSTOMER', 'ROLE_SUPER_ADMIN']} />} >
                <Route path="/home" element={<HomePage />} />
            </Route>
            <Route element={<PrivateRoute requiredRoles={['ROLE_ADMIN_BARBERSHOP', 'ROLE_SUPER_ADMIN']} />} >
                <Route path="/admin/:barbershopName" element={<BarbershopHomePage />} />
            </Route>
            <Route element={<PrivateRoute requiredRoles={['ROLE_SUPER_ADMIN']} />} >
                <Route path="/superadmin" element={<AdminHomePage />} />
            </Route>
        </Routes>
      <FooterSection />
    </BrowserRouter>
  )
}

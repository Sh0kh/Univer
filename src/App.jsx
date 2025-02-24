import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/Home";
import { Helmet, HelmetProvider } from "react-helmet-async"; // Добавлено для SEO
import "./Style/Media.css";
import AboutUs from "./Pages/AboutUs";
import Rahbariyat from "./Pages/Rahbariyat";
import Partners from "./Pages/Partners";
import International from "./Pages/International";
import Documents from "./Pages/Documents";
import InspectDocument from "./Pages/InspectDocument";
import OpenInfo from "./Pages/OpenInfo";
import ProtectedRoute from "./Components/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";

import Center from "./Pages/Center";
import Rekvizits from "./Pages/Rekvizits";
import CabinetPage from "./Pages/CabinetPage";
import Money from "./Pages/Money";
import WorkPage from "./Pages/WorkPage";

import AdminHomePage from "./AdminPages/AdminHomePage";
import AdminAboutUs from "./AdminPages/AboutUs";
import Categories from "./AdminPages/Categories";
import AdminPartners from "./AdminPages/Partners";
import Events from "./AdminPages/Events";
import Statistika from "./AdminPages/Statistika";
import CategoryDetail from "./AdminPages/CategoryDetail";
import Recvisits from "./AdminPages/Recvisits";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* hehe */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<AppLayout />}>
            <Route
              path="admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<AdminHomePage />} />
              <Route path="categories" element={<Categories />} />
              <Route path="recvizits" element={<Recvisits />} /> 
              <Route path="aboutus" element={<AdminAboutUs />} />
              <Route path="categories/detail/:categoryId" element={<CategoryDetail />} />
              <Route path="partners" element={<AdminPartners />} />
              <Route path="events" element={<Events/>} />
              <Route path="statistics" element={<Statistika />} />
              
            </Route>
            
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/biz-haqimizda" element={<AboutUs />} />
              <Route path="/rahbariyat" element={<Rahbariyat />} />
              <Route path="/hamkorlarimiz" element={<Partners />} />
              <Route path="/xalqaro-aloqalar" element={<International />} />
              <Route path="/hujjatlar" element={<Documents />} />
              <Route path="/murojaatlar" element={<InspectDocument />} />
              <Route path="/ochiq-ma'lumotlar" element={<OpenInfo />} />
              <Route path="/bo'lim-markazlar" element={<Center/>} />
              <Route path="/rekvizitlar" element={<Rekvizits/>} />
              <Route path="/virtual-kabinet" element={<CabinetPage/>} />
              <Route path="/korrupsiyaga-kurash" element={<Money/>} />
              <Route path="/bosh-ish-orni" element={<WorkPage/>} />
            
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;

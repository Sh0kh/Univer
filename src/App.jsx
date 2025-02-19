import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/Home";
import { Helmet, HelmetProvider } from "react-helmet-async"; // Добавлено для SEO
import './Style/Media.css';
import AboutUs from "./Pages/AboutUs";
import Rahbariyat from "./Pages/Rahbariyat";
import Partners from "./Pages/Partners";
import International from "./Pages/International";
import Documents from "./Pages/Documents";
import InspectDocument from "./Pages/InspectDocument";
import OpenInfo from "./Pages/OpenInfo";
import Center from "./Pages/Center";
import Rekvizits from "./Pages/Rekvizits";
import CabinetPage from "./Pages/CabinetPage";
import Money from "./Pages/Money";
import WorkPage from "./Pages/WorkPage";

function App() {
  return (
    <HelmetProvider>
      <Router>


        <Routes>
          {/* hehe */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<AppLayout />}>
            {/* <Route
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
            </Route> */}
            
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/staff" element={<Rahbariyat />} />

              <Route path='/partners' element={<Partners />} />
              <Route path='/International' element={<International />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/inspectDocument" element={<InspectDocument />} />
              <Route path="/openInfo" element={<OpenInfo />} />
              <Route path="/center" element={<Center/>} />
              <Route path="/rekvizits" element={<Rekvizits/>} />
              <Route path="/cabinet" element={<CabinetPage/>} />
              <Route path="/money" element={<Money/>} />
              <Route path="/work" element={<WorkPage/>} />
            
            </Route>
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;

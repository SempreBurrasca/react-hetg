import { Routes, Route } from "react-router-dom";
import { DiscoveryHub } from "./Routes/DiscoveryHub";
import { AcademicAvenues } from "./Routes/AcademicAvenues";
import { StudentCentral } from "./Routes/StudentCentral";
import { LegacyLane } from "./Routes/LegacyLane";
import { GatewayToGrowth } from "./Routes/GatewayToGrowth";
import { Header } from "./Componenti/Organismi/Header/Header";
import "./index.css";
import { Footer } from "./Componenti/Organismi/Footer/Footer";
import { Contattaci } from "./Routes/Contattaci";
import { Orientamento } from "./Routes/Orientamento";
import { Ammissione } from "./Routes/Ammissione";
import { Vae } from "./Routes/Vae";
import { StaffManagement } from "./Routes/StaffManagement";

import { DiscoveryHubMobile } from "./Routes/Mobile/DiscoveryHubMobile";
import { AcademicAvenuesMobile } from "./Routes/Mobile/AcademicAvenuesMobile";
import { StudentCentralMobile } from "./Routes/Mobile/StudentCentralMobile";
import { useIsMobile } from "./Componenti/Tools/useIsMobile";
import { LegacyLaneMobile } from "./Routes/Mobile/LegacyLaneMobile";
import { GatewayToGrowthMobile } from "./Routes/Mobile/GatewayToGrowthMobile";
import { Admin } from "./Routes/Admin/Admin";
import { useLocation } from "react-router-dom";
import { AdminHome } from "./Routes/Admin/AdminHome";
import { AdminPagine } from "./Routes/Admin/AdminPagine";
import { AdminFacolta } from "./Routes/Admin/AdminFacolta";
import { AdminCorsi } from "./Routes/Admin/AdminCorsi";
import { AdminStaff } from "./Routes/Admin/AdminStaff";
import { AdminDocenti } from "./Routes/Admin/AdminDocenti";
import { AdminContatti } from "./Routes/Admin/AdminContatti";
import { Login } from "./Routes/Admin/Login/Login";
import { RequireAuth } from "./Firebase/Autenticazione";
import { EditorFacolta } from "./Routes/Admin/EditorFacolta/EditorFacolta";
import { EditorCorsi } from "./Routes/Admin/EditorCorsi/EditorCorsi";
import { EditorStaff } from "./Routes/Admin/EditorStaff/EditorStaff";
import { EditorDocenti } from "./Routes/Admin/EditorDocenti/EditorDocenti";
import { SingleFacolta } from "./Routes/SingleFacolta";
import { SingleCorso } from "./Routes/SingleCorso";
import { Person } from "./Routes/Person";
import { Linktree } from "./Routes/Linktree";
import { LavoraConNoi } from "./Routes/LavoraConNoi";
import { Accreditamento } from "./Routes/Accreditamento";
import { UniAmericana } from "./Routes/UniAmericana";
import { Cerca } from "./Routes/Cerca";

function App() {
  const location = useLocation();
  const isMobile = useIsMobile();
  return (
    <>
      {!location.pathname.includes("/admin") && <Header />}{" "}
      <div>
        <Routes>
          <Route
            path="/"
            element={isMobile ? <DiscoveryHubMobile /> : <DiscoveryHub />}
          />
          <Route
            path="/academic-avenues"
            element={isMobile ? <AcademicAvenuesMobile /> : <AcademicAvenues />}
          />
          <Route path="/facolta/:facoltaId" element={<SingleFacolta />} />
          <Route path="/corso/:corsoId" element={<SingleCorso />} />
          <Route
            path="/student-central"
            element={isMobile ? <StudentCentralMobile /> : <StudentCentral />}
          />
          <Route
            path="/student-central/staff-management"
            element={<StaffManagement />}
          />
          <Route
            path="/legacy-lane"
            element={isMobile ? <LegacyLaneMobile /> : <LegacyLane />}
          />
          <Route
            path="/gateway-growth"
            element={isMobile ? <GatewayToGrowthMobile /> : <GatewayToGrowth />}
          />
              <Route
            path="/universita-americana"
            element={<UniAmericana/>}
          />
          <Route path="/person/:personId" element={<Person />} />
          <Route path="/contattaci" element={<Contattaci />} />
          <Route path="/collabora" element={<LavoraConNoi />} />
          <Route path="/orientamento" element={<Orientamento />} />
          <Route path="/cerca" element={<Cerca />} />
          <Route path="/ammissione" element={<Ammissione />} />
          <Route path="/vae-form" element={<Vae />} />
          <Route path="/accreditamento" element={<Accreditamento />} />
          <Route path="linktree" element={<Linktree />} />
          <Route path="/policies" element={<div />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <RequireAuth>
                <Admin />
              </RequireAuth>
            }
          >
            <Route index element={<AdminHome />} />
            <Route path="pagine" element={<AdminPagine />} />
            <Route path="facolta" element={<AdminFacolta />}>
              <Route path=":facoltaId" element={<EditorFacolta />} />
            </Route>
            <Route path="corsi" element={<AdminCorsi />}>
              <Route path=":corsoId" element={<EditorCorsi />} />
            </Route>
            <Route path="docenti" element={<AdminDocenti />}>
              <Route path=":docentiId" element={<EditorDocenti />} />
            </Route>
            <Route path="staff" element={<AdminStaff />}>
              <Route path=":staffId" element={<EditorDocenti />} />
            </Route>
            <Route path="contatti" element={<AdminContatti />} />
   
          </Route>
        </Routes>
        {!location.pathname.includes("/admin") && <Footer />}
      </div>
    </>
  );
}

export default App;

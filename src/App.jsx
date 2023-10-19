
import { Routes, Route } from "react-router-dom";
import { DiscoveryHub } from "./Routes/DiscoveryHub";
import { AcademicAvenues } from "./Routes/AcademicAvenues";
import { StudentCentral } from "./Routes/StudentCentral";
import { LegacyLane } from "./Routes/LegacyLane";
import { GatewayToGrowth } from "./Routes/GatewayToGrowth";
import { Header } from "./Componenti/Organismi/Header/Header";
import "./index.css"
import { Footer } from "./Componenti/Organismi/Footer/Footer";
import { Contattaci } from "./Routes/Contattaci";
import { Orientamento } from "./Routes/Orientamento";
import { Ammissione } from "./Routes/Ammissione";
import { Vae } from "./Routes/Vae";
import { StaffManagement } from "./Routes/StaffManagement";
function App() {
  return (
    <>
      <Header/>
      <div >
      <Routes>
        <Route path="/" element={<DiscoveryHub />} />
        <Route path="/academic-avenues" element={<AcademicAvenues />} />
        <Route path="/student-central" element={<StudentCentral />} />
        <Route path="/student-central/staff-management" element={<StaffManagement />} />
        <Route path="/legacy-lane" element={<LegacyLane />} />
        <Route path="/gateway-growth" element={<GatewayToGrowth />} />
        <Route path="/contattaci" element={<Contattaci />} />
        <Route path="/orientamento" element={<Orientamento />} />
        <Route path="/ammissione" element={<Ammissione />} />
        <Route path="/vae-form" element={<Vae />} />
        <Route path="/policies" element={<div />} />
   
      </Routes>
      <Footer/>
      </div>
    </>
  );
}

export default App;

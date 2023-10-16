
import { Routes, Route } from "react-router-dom";
import { DiscoveryHub } from "./Routes/DiscoveryHub";
import { AcademicAvenues } from "./Routes/AcademicAvenues";
import { StudentCentral } from "./Routes/StudentCentral";
import { LegacyLane } from "./Routes/LegacyLane";
import { GatewayToGrowth } from "./Routes/GatewayToGrowth";
import { Header } from "./Componenti/Organismi/Header/Header";
import "./index.css"
function App() {
  return (
    <>
      <Header/>
      <div >
      <Routes>
        <Route path="/" element={<DiscoveryHub />} />
        <Route path="/academic-avenues" element={<AcademicAvenues />} />
        <Route path="/student-central" element={<StudentCentral />} />
        <Route path="/legacy-lane" element={<LegacyLane />} />
        <Route path="/gateway-growth" element={<GatewayToGrowth />} />
      </Routes>
      </div>
    </>
  );
}

export default App;

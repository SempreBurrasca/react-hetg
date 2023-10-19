import { useNavigate } from 'react-router-dom';
import ComponentAngle from "../../../assets/tp_r.svg";
import "./nav.scss";
export function Nav() {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav-wrapper">
        <img className="top-left-angle" src={ComponentAngle} />
        <div className="nav-container">
          <span className="menu">MENù</span>
          <div className="menu">
            <ul>
              <li className="menu-item" onClick={()=>navigate("/")}>Discovery Hub</li>
              <li className="menu-item" onClick={()=>navigate("/academic-avenues")}>Academic Avenues</li>
              <li className="menu-item" onClick={()=>navigate("/student-central")}>Student Central</li>
              <li className="menu-item" onClick={()=>navigate("/legacy-lane")}>Legacy Lane</li>
              <li className="menu-item" onClick={()=>navigate("/gateway-growth")}>Gateway <span>to</span> Growth</li>
              <li className="menu-item" onClick={()=>navigate("/#")}>Accedi alla piattaforma</li>
            </ul>
          </div>
        </div>
        <img className="top-right-angle" src={ComponentAngle} />
      </div>
    </>
  );
}

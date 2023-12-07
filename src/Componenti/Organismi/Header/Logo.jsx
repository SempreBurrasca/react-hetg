
import { useNavigate } from 'react-router-dom';
import LogoBreve from "../../../assets/lg-icon.svg";
import LogoTot from "../../../assets/logo.png";
import ComponentAngle from "../../../assets/tp_r.svg";
import "./logo.scss";
export function Logo() {
  const navigate = useNavigate();
  return (
    <>
      <div className="logo-wrapper">
        <div className="logo-container">
          <div className="tot-wrapper" onClick={()=>navigate("/")}>
            <img id="logo-tot" src={LogoTot} alt="Logo di HETG"/>
            <img id="logo-icon" src={LogoBreve}  alt="Logo di HETG" />
          </div>
        </div>
        <img className="top-right-angle" src={ComponentAngle}  alt="Logo di HETG"/>
        <img className="bottom-left-angle" src={ComponentAngle}  alt="Logo di HETG"/>
      </div>
    </>
  );
}

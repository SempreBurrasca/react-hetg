import "./logo.scss";
import LogoBreve from "../../../assets/lg-icon.svg";
import LogoTot from "../../../assets/logo.png";
import ComponentAngle from "../../../assets/tp_r.svg";
export function Logo() {
  return (
    <>
      <div className="logo-wrapper">
        <div className="logo-container">
          <div className="tot-wrapper">
            <img id="logo-tot" src={LogoTot} />
            <img id="logo-icon" src={LogoBreve} />
          </div>
        </div>
        <img className="top-right-angle" src={ComponentAngle} />
        <img className="bottom-left-angle" src={ComponentAngle} />
      </div>
    </>
  );
}

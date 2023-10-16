import "./nav.scss";
import ComponentAngle from "../../../assets/tp_r.svg";
export function Nav() {
  return (
    <>
      <div className="nav-wrapper">
        <img className="top-left-angle" src={ComponentAngle} />
        <div className="nav-container">
          <span className="menu">MENù</span>
          <div className="menu">
            <ul>
              <li className="menu-item">item</li>
              <li className="menu-item">item</li>
              <li className="menu-item">item</li>
              <li className="menu-item">item</li>
              <li className="menu-item">item</li>
            </ul>
          </div>
        </div>
        <img className="top-right-angle" src={ComponentAngle} />
      </div>
    </>
  );
}

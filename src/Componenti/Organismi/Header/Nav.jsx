import { useNavigate } from "react-router-dom";
import ComponentAngle from "../../../assets/tp_r.svg";
import "./nav.scss";
export function Nav(props) {
  const { copy, links } = props;
  const navigate = useNavigate();
  return (
    <>
      <div className="nav-wrapper">
        <img className="top-left-angle" src={ComponentAngle} />
        <div className="nav-container">
          <span className="menu">{copy.header[7]}</span>
          <div className="menu">
            <ul>
              <li className="menu-item" onClick={() => navigate("/")}>
                {copy.header[0]}
              </li>
              <li
                className="menu-item"
                onClick={() => navigate("/academic-avenues")}
              >
                {copy.header[1]}
              </li>
              <li
                className="menu-item"
                onClick={() => navigate("/student-central")}
              >
                {copy.header[2]}
              </li>
              <li
                className="menu-item"
                onClick={() => navigate("/legacy-lane")}
              >
                {copy.header[3]}
              </li>
              <li
                className="menu-item"
                onClick={() => navigate("/gateway-growth")}
              >
                {copy.header[4]}{" "}
              </li>
              <li
                className="menu-item"
                onClick={() => navigate("/vae-form")}
              >
                {copy.header[10]}{" "}
              </li>
              <li
                className="menu-item"
                onClick={() => navigate("/accreditamento")}
              >
                {copy.header[11]}{" "}
              </li>
              <li
                className="menu-item"
                onClick={() => window.open('http://www.eit-ateneo.org')}
              >
                {copy.header[12]}{" "}
              </li>
              <li
                className="menu-item"
                onClick={() =>
                  navigate("/student-central/staff-management")
                }
              >
                {copy.header[9]}
              </li>
              <li className="menu-item" onClick={() => navigate("/linktree")}>
                {copy.header[5]}
              </li>
            </ul>
          </div>
        </div>
        <img className="top-right-angle" src={ComponentAngle} />
      </div>
    </>
  );
}

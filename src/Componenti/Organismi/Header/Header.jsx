import "./header.scss";
import ComponentAngle from "../../../assets/tp_r.svg";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { Button } from "../../Molecole/Buttons/Button";
export function Header() {
  return (
    <>
      <div id="top-frame"></div>
      <div id="bottom-frame"></div>
      <div id="left-frame"></div>
      <div id="right-frame"></div>
      <img id="bottom-left-angle" src={ComponentAngle} />
      <img id="bottom-right-angle" src={ComponentAngle} />
      <Logo />
      <Nav />
      {
        //manca da fare la funzione di callback al botton
      }
      <Button
        style={{ position: "fixed", top: "1rem", right: 0 }}
        angleposition={{
          topLeft: true,
          bottomLeft: false,
          topRight: false,
          bottomRight: false,
        }}
        borderradius="bottom-left-radius"
      >
        Contattaci ora
      </Button>
    </>
  );
}

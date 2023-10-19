import { Button } from "../../Molecole/Buttons/Button";
import { PlusIcon } from "../../Molecole/PlusIcon/PlusIcon";
import { useNavigate } from 'react-router-dom';
import xIcon from '../../../assets/x-icon.png'
import igIcon from '../../../assets/ig-icon.png'
import fbIcon from '../../../assets/fb-icon.png'
import inIcon from '../../../assets/in-icon.png'
import "./footer.scss";

export function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="divider" />
      <div className="footer-cta">
          <Button
            style={{ position: "relative", left: "1rem", top: "-2.5rem" }}
            angleposition={{
              overTopLeft: true,
              underBottomLeft: true,
            }}
            borderradius="bottom-right-radius top-right-radius"
            path="contattaci"
          >
            Contattaci
          </Button>
        </div>
      <footer>
       
        <div className="follow-social">
          <span className="text">Seguici</span>
          <div className="social-icons">
            <a href="#"><img src={xIcon}/></a>
            <a href="#"><img src={igIcon}/></a>
            <a href="#"><img src={fbIcon}/></a>
            <a href="#"><img src={inIcon}/></a>
          </div>
        </div>
        <PlusIcon
          isRed
          style={{
            gridColumn: 5,
            gridRow: "2",
          }}
        />
        <PlusIcon
          isRed
          style={{
            gridColumn: 7,
            gridRow: "2",
          }}
        />
        <PlusIcon
          isRed
          style={{
            gridColumn: 9,
            gridRow: "2",
          }}
        />
        <div className="link-footer">
          <span onClick={()=>navigate("/academic-avenues")}> Facoltà e corsi</span>
          <span onClick={()=>navigate("/student-central")}> Segreteria studenti</span>
        </div>
        <div className="link-footer-2">
          <span onClick={()=>navigate("/policies")}> Cookies & privacy policies</span>
          <span  onClick={()=>navigate("/student-central/staff-management")}> Staff & management</span>
        </div>
        <div className="legals-footer">
            <span>www.unicampushetg.ch<br/>
Legally authorized under articles 20 and 27 of the Federal Constitution
Name approved by the Federal Trade Registry Office: [SIAMO IN ATTESA DEL CODICE]
</span>
        </div>
      </footer>
    </>
  );
}

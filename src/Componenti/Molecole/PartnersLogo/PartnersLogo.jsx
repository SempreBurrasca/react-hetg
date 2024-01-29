import React, { useRef, useEffect } from "react";
import "./partnersLogo.scss";
import part1 from "../../../assets/partners/partn1.png";
import part2 from "../../../assets/partners/partn2.png";
import part3 from "../../../assets/partners/partn3.png";
import part4 from "../../../assets/partners/partn4.png";
import part5 from "../../../assets/partners/partn5.png";
import part6 from "../../../assets/partners/partn6.png";
import part7 from "../../../assets/partners/partn7.png";
import part8 from "../../../assets/partners/partn8.png";
import part9 from "../../../assets/partners/partn9.png";
import part10 from "../../../assets/partners/partn10.png";
import part11 from "../../../assets/partners/partn11.png";
import part12 from "../../../assets/partners/partn12.png";
export function PartnersLogo(props) {
  const scrollRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    function animate() {
      const container = scrollRef.current;
      const totalWidth = container.scrollWidth / 2; // Diviso 2 perché i loghi sono duplicati

      container.scrollLeft += 1;
      if (container.scrollLeft >= totalWidth) {
        container.scrollLeft = 0; // Riparte da 0 ma senza scatto, perché i loghi sono duplicati
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="partners-logo" ref={scrollRef}>
      {/* Duplica qui i loghi */}
      {Array(2).fill(
        <React.Fragment>
          <img
            src={part1}
            alt="Diemme Informatica"
            onClick={() => window.open("https://diemmeinformatica.com/")}
          />
          <img
            src={part2}
            alt="Istituto ellenico della diplomazia culturale"
            onClick={() => window.open("www.iedc-ancona.com")}
          />
          <img
            src={part3}
            alt="Associazione ACA"
            onClick={() =>
              window.open("https://associazione-aca.blogspot.com/")
            }
          />
          <img
            src={part4}
            alt="MTGS Formation"
            onClick={() => window.open("https://mtgsformation.com/")}
          />
          <img
            src={part5}
            alt="MGS Media Press"
            onClick={() => window.open("https://www.mgsmediapress.com/")}
          />
          <img
            src={part6}
            alt="MGS"
            onClick={() => window.open("https://www.minervagroupservice.com/")}
          />
          <img
            src={part7}
            alt="Mela Holding Group"
            onClick={() => window.open("https://www.melaholdinggroup.com/")}
          />
          <img
            src={part8}
            alt="1 Click To Pay"
            onClick={() => window.open("https://1click2pay.com/")}
          />
          <img
            src={part9}
            alt="Associazione Nazionale Psicologi Terapeuti"
            onClick={() => window.open("https://anapp.it/")}
          />
          <img
            src={part10}
            alt="Associazione Nazionale Psicologi Terapeuti"
            onClick={() => window.open("https://netpartnerconsulting.com/")}
          />
          <img
            src={part11}
            alt=""
            onClick={() => window.open("https://vitalyspa.it/")}
          />
          <img
            src={part12}
            alt=""
            onClick={() =>
              window.open("http://www.mediatoristragiudiziali.it/")
            }
          />
        </React.Fragment>
      )}
    </div>
  );
}

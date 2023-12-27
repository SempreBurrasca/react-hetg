import React, { useRef, useEffect } from "react";
import "./partnersLogo.scss";
import part1 from "../../../assets/partners/partn1.png"
import part2 from "../../../assets/partners/partn2.png"
import part3 from "../../../assets/partners/partn3.png"
import part4 from "../../../assets/partners/partn4.png"
import part5 from "../../../assets/partners/partn5.png"
import part6 from "../../../assets/partners/partn6.png"
export function PartnersLogo(props) {
  const scrollRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    function animate() {
      const container = scrollRef.current;
      const halfWidth = container.scrollWidth / 2;

      container.scrollLeft += 1;
      if (container.scrollLeft >= halfWidth) {
        container.scrollLeft = 0;
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

        <img src={part1} alt="Diemme Informatica" href="https://diemmeinformatica.com/"/>
        <img src={part2} alt="Istituto ellenico della diplomazia culturale" href="www.iedc-ancona.com"/>
        <img src={part3} alt="Associazione ACA" href="https://associazione-aca.blogspot.com/"/>
        <img src={part4} alt="MTGS Formation" href="https://mtgsformation.com/"/>
        <img src={part5} alt="MGS Media Press" href="https://www.mgsmediapress.com/"/>
        <img src={part6} alt="MGS" href="https://www.minervagroupservice.com/"/>

    </div>
  );
}

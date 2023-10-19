import React, { useRef, useEffect } from "react";
import "./partnersLogo.scss";

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
      {props.partners.map((partner, index) => (
        <img key={index} src={partner.logo} alt={partner.name} />
      ))}
    </div>
  );
}

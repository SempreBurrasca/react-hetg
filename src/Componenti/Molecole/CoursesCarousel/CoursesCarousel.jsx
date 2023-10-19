import React, { useRef, useEffect } from "react";
import "./coursescarousel.scss";

export function CoursesCarousel(props) {
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
    <div className="courses-logos" ref={scrollRef}>
      {props.partners.map((partner, index) => (
        <img key={index} src={partner.logo} alt={partner.name} />
      ))}
    </div>
  );
}

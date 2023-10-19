import React from "react";
import arrow_right from "../../../assets/arrow-right.png";
import { useNavigate } from "react-router-dom";
import "./staffcarousel.scss";
export function StaffCarousel(props) {
  const carouselRef = React.useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startPos, setStartPos] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const navigate = useNavigate();
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos(e.clientY);
    setScrollLeft(carouselRef.current.scrollTop);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const y = e.clientY;
    const walk = y - startPos;
    carouselRef.current.scrollTop = scrollLeft - walk;
  };

  return (
    <>
      <div
        {...props}
        className="carousel-wrapper-hor"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="staff-card">
          <div className="staff-cta">
            <span
              className="cta-button"
              onClick={() => navigate("/facolta/journey-to-arts")}
            >
              journey to arts
            </span>
            <img className="arrow" src={arrow_right} />
          </div>
        </div>
        <div className="staff-card">
          <div className="staff-cta">
            <span
              className="cta-button"
              onClick={() => navigate("/facolta/journey-to-arts")}
            >
              journey to arts
            </span>
            <img className="arrow" src={arrow_right} />
          </div>
        </div>
        <div className="staff-card">
          <div
            className="staff-cta"
            onClick={() => navigate("/facolta/journey-to-arts")}
          >
            <span className="cta-button">journey to arts</span>
            <img className="arrow" src={arrow_right} />
          </div>
        </div>
        <div className="staff-card">
          <div className="staff-cta">
            <span
              className="cta-button"
              onClick={() => navigate("/facolta/journey-to-arts")}
            >
              journey to arts
            </span>
            <img className="arrow" src={arrow_right} />
          </div>
        </div>
        <div className="staff-card">
          <div className="staff-cta">
            <span
              className="cta-button"
              onClick={() => navigate("/facolta/journey-to-arts")}
            >
              journey to arts
            </span>
            <img className="arrow" src={arrow_right} />
          </div>
        </div>
        <div className="staff-card">
          <div className="staff-cta">
            <span
              className="cta-button"
              onClick={() => navigate("/facolta/journey-to-arts")}
            >
              journey to arts
            </span>
            <img className="arrow" src={arrow_right} />
          </div>
        </div>
      </div>
    </>
  );
}

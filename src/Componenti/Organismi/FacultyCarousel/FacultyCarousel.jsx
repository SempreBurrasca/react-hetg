import React from "react";
import arrow_right from "../../../assets/arrow-right.png";
import { useNavigate } from "react-router-dom";
import "./facultycarousel.scss";
export function FacultyCarousel(props) {
  const carouselRef = React.useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startPos, setStartPos] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const navigate = useNavigate();
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos(e.clientX);
    setScrollLeft(carouselRef.current.scrollLeft);
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
    const x = e.clientX;
    const walk = x - startPos;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <div
        {...props}
        className="carousel-wrapper"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="faculty-card">
          <div className="faculty-cta">
            <span
              className="cta-button"
              onClick={() => navigate("/facolta/journey-to-arts")}
            >
              journey to arts
            </span>
            <img className="arrow" src={arrow_right} />
          </div>
        </div>
        <div className="faculty-card">
          <div className="faculty-cta">
            <span
              className="cta-button"
              onClick={() => navigate("/facolta/journey-to-arts")}
            >
              journey to arts
            </span>
            <img className="arrow" src={arrow_right} />
          </div>
        </div>
        <div className="faculty-card">
          <div
            className="faculty-cta"
            onClick={() => navigate("/facolta/journey-to-arts")}
          >
            <span className="cta-button">journey to arts</span>
            <img className="arrow" src={arrow_right} />
          </div>
        </div>
        <div className="faculty-card">
          <div className="faculty-cta">
            <span
              className="cta-button"
              onClick={() => navigate("/facolta/journey-to-arts")}
            >
              journey to arts
            </span>
            <img className="arrow" src={arrow_right} />
          </div>
        </div>
        <div className="faculty-card">
          <div className="faculty-cta">
            <span
              className="cta-button"
              onClick={() => navigate("/facolta/journey-to-arts")}
            >
              journey to arts
            </span>
            <img className="arrow" src={arrow_right} />
          </div>
        </div>
        <div className="faculty-card">
          <div className="faculty-cta">
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

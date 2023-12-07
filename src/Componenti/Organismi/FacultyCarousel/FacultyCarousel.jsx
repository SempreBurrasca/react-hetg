import React, { useEffect, useState } from "react";
import arrow_right from "../../../assets/arrow-right.png";
import { useNavigate } from "react-router-dom";
import "./facultycarousel.scss";
import { getFacoltas } from "../../../Firebase/RecuperoCopy";
import { Button } from "../../Molecole/Buttons/Button";
export function FacultyCarousel(props) {
  const carouselRef = React.useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startPos, setStartPos] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const [faculties, setFaculties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (faculties.length < 1) {
      const fetchFaculties = async () => {
        try {
          const data = await getFacoltas();
          setFaculties(data); // Assumi che 'data' sia un array di oggetti facoltà
        } catch (error) {
          console.error("Failed to fetch faculties", error);
        }
      };

      fetchFaculties();
    }
  }, [faculties]);

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
        {faculties.map((faculty) => (
          <div
            key={faculty.id}
            className="faculty-card"
            style={{ backgroundImage: "url(" + faculty.imageUrl + ")" }}
          >
            <h4 className="card-title">{faculty.nome}</h4>
            <div
              className="faculty-cta"
              onClick={() => navigate(`/facolta/${faculty.id}`)} // Assumi che ogni facoltà abbia uno 'slug' univoco
            >
              <span className="cta-button">{faculty.soprannome}</span>
              <img className="arrow" src={arrow_right} alt="Arrow Right" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

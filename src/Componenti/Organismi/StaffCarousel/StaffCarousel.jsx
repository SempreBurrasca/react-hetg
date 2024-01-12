import React, { useState, useEffect } from "react";
import arrow_right from "../../../assets/arrow-right.png";
import { useNavigate } from "react-router-dom";
import "./staffcarousel.scss";
import { getDocenti, getStaff } from "../../../Firebase/RecuperoCopy";
export function StaffCarousel(props) {
  const { type } = props;
  const carouselRef = React.useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startPos, setStartPos] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const [people, setPeople] = React.useState([]);
  const navigate = useNavigate();

  const getPeople = async (type) => {
    switch (type) {
      case "staff":
        return await getDocenti();
      case "docenti":
        return await getDocenti();
      default:
        return []; // Se il tipo non è né staff né docenti, restituisci un array vuoto
    }
  };
  const fetchData = (type) => {

      // Sostituisci con la tua logica di fetch per ottenere i dati dal database
      // Ad esempio, se hai una funzione getPeople(type) che restituisce i dati
      getPeople(type)
        .then((data) => {
          console.log(data);
          localStorage.setItem(type, JSON.stringify(data));
          if (type === "staff") {
            // Filtra data per ruolo
            const filteredData = data.filter(
              (person) =>
                person.ruolo?.toLowerCase().includes("direttore") ||
                person.ruolo?.toLowerCase().includes("rettore") ||
                person.ruolo?.toLowerCase().includes("prorettore") ||
                person.ruolo?.toLowerCase().includes("senato") ||
                person.ruolo?.toLowerCase().includes("valutazione")
            );
            setPeople(filteredData);
          } else {
            setPeople(data);
          }
        })
        .catch(console.error);
    
  };

  useEffect(() => {
    fetchData(type); // Chiama la funzione di fetch con il tipo corretto
  }, [type]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const isMobile = window.innerWidth < 1000;
    setStartPos(isMobile ? e.clientX : e.clientY);
    setScrollLeft(
      isMobile ? carouselRef.current.scrollLeft : carouselRef.current.scrollTop
    );
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

    const isMobile = window.innerWidth < 1000;
    const currentPos = isMobile ? e.clientX : e.clientY;
    const walk = currentPos - startPos;

    if (isMobile) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    } else {
      carouselRef.current.scrollTop = scrollLeft - walk;
    }
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
        {people.map(
          (
            person,
            index // Usa la variabile people per il mapping
          ) => (
            <div
              className="staff-card"
              key={person.id}
              style={{ backgroundImage: "url(" + person.imageUrl + ")" }}
            >
              {/* Presumo che l'oggetto person abbia una proprietà nome */}
              <div
                className="staff-cta"
                onClick={() => navigate("/person/" + person.id)}
              >
                {" "}
                {/* Cambia il percorso come necessario */}
                <span>{person.nomeCognome[1]}{" "}{person.nomeCognome[0]}</span>
                <img className="arrow" src={arrow_right} />
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}

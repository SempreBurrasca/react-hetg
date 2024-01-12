import React, { useRef, useEffect, useState } from "react";
import { getCorsiXXX, getFacoltas } from "../../../Firebase/RecuperoCopy";
import arrow_right from "../../../assets/arrow-right.png";
import "./coursescarousel.scss";
import { useNavigate } from "react-router-dom";

export function CoursesCarousel(props) {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [corsi, setCorsi] = useState([]);
  const [copy, setCopy] = useState(null);

  useEffect(() => {
    fetch("/copy/copy.json")
      .then((response) => response.json())
      .then((data) => {
        setCopy(data.it.CoursesCarousel);
      })
      .catch((error) => {
        console.error("Error fetching the contact data:", error);
      });
  }, []);

  React.useEffect(() => {

    // Funzione per recuperare tutti i corsi da tutte le collezioni
    async function getAllCorsi() {
      const collections = ["academy"];
      try {
        const allCorsiPromises = collections.map((collection) =>
          getCorsiXXX(collection)
        );
        const allCorsiResults = await Promise.all(allCorsiPromises);
        const combinedCorsi = allCorsiResults.flat(); // Combina tutti i corsi in un unico array

        // Salva i corsi combinati nella cache e nello stato
        setCorsi(combinedCorsi);
      } catch (error) {
        console.error("Errore nel recupero dei corsi:", error);
      }
    }

      getAllCorsi();

  }, []); // L'array vuoto indica che l'effetto verrà eseguito solo al montaggio del componente

  useEffect(() => {
    let animationFrameId;

    function animate() {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const halfWidth = container.scrollWidth / 2;

        container.scrollLeft += 1;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  if (!copy) {
    return <div>Loading...</div>; // Display loading message or spinner while the data is being fetched
  }
  return (
    <div className="courses-logos" ref={scrollRef}>
      {corsi &&
        corsi.map((corso, index) => (
          <div
            className="corso-card"
            key={
              corso.id
            } /*style={{backgroundImage:"url("+corso.imageUrl+")"}}*/
          >
            <h5>{corso.nome}</h5>
            <div
              className="corso-cta"
              onClick={() => navigate("/corso/" + corso.id)}
            >
              <span>{copy.cta}</span>
              <img className="arrow" src={arrow_right} />
            </div>
          </div>
        ))}
    </div>
  );
}

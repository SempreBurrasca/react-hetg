import React, { useRef, useEffect, useState } from "react";
import { getCorsiXXX, getFacoltas } from "../../../Firebase/RecuperoCopy";
import arrow_right from "../../../assets/arrow-right.png";
import "./coursescarousel.scss";
import { useNavigate } from "react-router-dom";

export function CoursesCarousel(props) {
  const navigate=useNavigate()
  const scrollRef = useRef(null);
  const [corsi, setCorsi] = useState([]);

  React.useEffect(() => {
    // Nome univoco per il localStorage
    const LOCAL_STORAGE_KEY = "corsi_academy";

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
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(combinedCorsi));
        setCorsi(combinedCorsi);
      } catch (error) {
        console.error("Errore nel recupero dei corsi:", error);
      }
    }

    // Verifica se i dati sono già presenti nella cache del localStorage
    const cachedCorsi = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (cachedCorsi) {
      setCorsi(JSON.parse(cachedCorsi));
    } else {
      getAllCorsi();
    }
  }, []); // L'array vuoto indica che l'effetto verrà eseguito solo al montaggio del componente

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
      {corsi&&corsi.map((corso, index) => (
        <div className="corso-card" key={corso.id} /*style={{backgroundImage:"url("+corso.imageUrl+")"}}*/>
          <h5>{corso.nome}</h5>
          <div className="corso-cta" onClick={()=>navigate("/corso/"+corso.id)}>
            <span>Visita ora</span>
            <img className="arrow" src={arrow_right} />
          </div>
        </div>
      ))}
    </div>
  );
}

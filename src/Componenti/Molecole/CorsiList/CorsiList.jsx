import React, { useState, useRef, useEffect } from "react";
import arrow_right from "../../../assets/arrow-right.png";
import { faq } from "../../../assets/data";
import "./corsilist.scss";
import { getCorsiByFacoltaNome } from "../../../Firebase/RecuperoCopy";
import { useNavigate } from "react-router-dom";
export function CorsiList(props) {
  const { facoltaNome, facolta } = props;
  const wrapperRef = useRef(null);
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [corsi, setCorsi] = useState([]);
  const [copy,setCopy]=useState(null);

  useEffect(() => {
    fetch('/copy/copy.json')
      .then(response => response.json())
      .then(data => {
        setCopy(data.it.corsiList); 
      })
      .catch(error => {
        console.error('Error fetching the contact data:', error);
      });
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos(e.clientY);
    setScrollTop(wrapperRef.current.scrollTop);
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
    wrapperRef.current.scrollTop = scrollTop - walk;
  };

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // nasconde se è già attivo
    } else {
      setActiveIndex(index); // altrimenti mostra
    }
  };
  React.useEffect(() => {
    // Funzione per recuperare tutti i corsi da tutte le collezioni
    async function getAllCorsi() {
      const collections = [
        "triennale",
        "magistrale",
        "phd",
        "master-i",
        "master-ii",
        "master-ex",
        "perfezionamento",
        "academy",
      ];

      try {
        const allCorsiPromises = collections.map((collection) =>
          getCorsiByFacoltaNome(collection, facoltaNome)
        );
        const allCorsiResults = await Promise.all(allCorsiPromises);
        const combinedCorsi = allCorsiResults.flat(); // Combina tutti i corsi in un unico array

        // Salva i corsi combinati nella cache e nello stato
        localStorage.setItem(
          "corsi-" + facolta.id,
          JSON.stringify(combinedCorsi)
        );
        setCorsi(combinedCorsi);
        console.log("corsi=>", corsi);
      } catch (error) {
        console.error("Errore nel recupero dei corsi:", error);
      }
    }

    getAllCorsi();
  }, [facoltaNome]);

  if (!copy) {
    return <div>Loading...</div>; // Display loading message or spinner while the data is being fetched
  }

  return (
    <div
      className="corsi-wrapper"
      ref={wrapperRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className={activeIndex === "triennale" ? "active" : ""}>
        <div onClick={() => handleToggle("triennale")}>
          <h4>{copy.triennale.title}</h4> <img className="arrow" src={arrow_right} />
        </div>
        {corsi.map(
          (c, index) =>
            c.tipo === "triennale" && (
              <div className="risposta" key={c.id + "-" + index}>
                <p onClick={() => navigate("/corso/" + c.id)}>{copy.triennale.body} {c.nome}</p>
              </div>
            )
        )}
        <div className="divider" />
      </div>

      <div className={activeIndex === "magistrale" ? "active" : ""}>
        <div onClick={() => handleToggle("magistrale")}>
          <h4>{copy.magistrale.title}</h4> <img className="arrow" src={arrow_right} />
        </div>
        {corsi.map(
          (c, index) =>
            c.tipo === "magistrale" && (
              <div className="risposta" key={c.id + "-" + index}>
                <p onClick={() => navigate("/corso/" + c.id)}>
                {copy.magistrale.body} {c.nome}
                </p>
              </div>
            )
        )}
        <div className="divider" />
      </div>

      <div className={activeIndex === "phd" ? "active" : ""}>
        <div onClick={() => handleToggle("phd")}>
          <h4>{copy.phd.title}</h4> <img className="arrow" src={arrow_right} />
        </div>
        {corsi.map(
          (c, index) =>
            c.tipo === "phd" && (
              <div className="risposta" key={c.id + "-" + index}>
                <p onClick={() => navigate("/corso/" + c.id)}>{copy.phd.body} {c.nome}</p>
              </div>
            )
        )}
        <div className="divider" />
      </div>

      <div className={activeIndex === "master-i" ? "active" : ""}>
        <div onClick={() => handleToggle("master-i")}>
          <h4>{copy.masterI.title}</h4>{" "}
          <img className="arrow" src={arrow_right} />
        </div>
        {corsi.map(
          (c, index) =>
            c.tipo === "master-i" && (
              <div className="risposta" key={c.id + "-" + index}>
                <p onClick={() => navigate("/corso/" + c.id)}>{copy.masterI.body} {c.nome}</p>
              </div>
            )
        )}
        <div className="divider" />
      </div>

      <div className={activeIndex === "master-ii" ? "active" : ""}>
        <div onClick={() => handleToggle("master-ii")}>
          <h4>{copy.masterII.title}</h4>{" "}
          <img className="arrow" src={arrow_right} />
        </div>
        {corsi.map(
          (c, index) =>
            c.tipo === "master-ii" && (
              <div className="risposta" key={c.id + "-" + index}>
                <p onClick={() => navigate("/corso/" + c.id)}>{copy.masterII.body} {c.nome}</p>
              </div>
            )
        )}
        <div className="divider" />
      </div>

      <div className={activeIndex === "master-ex" ? "active" : ""}>
        <div onClick={() => handleToggle("master-ex")}>
          <h4>{copy.masterExecutive.title}</h4> <img className="arrow" src={arrow_right} />
        </div>
        {corsi.map(
          (c, index) =>
            c.tipo === "master-ex" && (
              <div className="risposta" key={c.id + "-" + index}>
                <p onClick={() => navigate("/corso/" + c.id)}>{copy.masterExecutive.body} {c.nome}</p>
              </div>
            )
        )}
        <div className="divider" />
      </div>

      <div className={activeIndex === "perfezionamento" ? "active" : ""}>
        <div onClick={() => handleToggle("perfezionamento")}>
          <h4>{copy.perfezionamento.title}</h4>{" "}
          <img className="arrow" src={arrow_right} />
        </div>
        {corsi.map(
          (c, index) =>
            c.tipo === "perfezionamento" && (
              <div className="risposta" key={c.id + "-" + index}>
                <p onClick={() => navigate("/corso/" + c.id)}>{copy.perfezionamento.body} {c.nome}</p>
              </div>
            )
        )}
        <div className="divider" />
      </div>

      <div className={activeIndex === "academy" ? "active" : ""}>
        <div onClick={() => handleToggle("academy")}>
          <h4>{copy.academy.title}</h4> <img className="arrow" src={arrow_right} />
        </div>
        {corsi.map(
          (c, index) =>
            c.tipo === "academy" && (
              <div className="risposta" key={c.id + "-" + index}>
                <p onClick={() => navigate("/corso/" + c.id)}>{copy.academy.body} {c.nome}</p>
              </div>
            )
        )}
        <div className="divider" />
      </div>
    </div>
  );
}

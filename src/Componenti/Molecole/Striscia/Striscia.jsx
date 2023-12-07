import { useNavigate } from "react-router-dom";
import { getFacoltas } from "../../../Firebase/RecuperoCopy";
import { Button } from "../Buttons/Button";
import { PlusIcon } from "../PlusIcon/PlusIcon";
import "./striscia.scss";
import React,{ useRef, useEffect, useState } from "react";

export function Striscia(props) {
  const navigate = useNavigate()
  const scrollRef = useRef(null);
  const [facolta,setFacolta]=useState([])
  const fetchFacoltas = () => {
    getFacoltas()
      .then((data) => {
        localStorage.setItem("facolta", JSON.stringify(data));
        setFacolta(data);
      })
      .catch(console.error);
  };
  React.useEffect(() => {
    // Controlla se i dati sono presenti in localStorage
    const cachedFacolta = localStorage.getItem("facolta");
    if (cachedFacolta) {
      // Se presenti in localStorage, utilizza i dati dalla cache
      setFacolta(JSON.parse(cachedFacolta));
      console.log("Presa dalla cache");
    } else {
      fetchFacoltas();
    }
  }, []);
  useEffect(() => {
    let animationFrameId;

    function animate() {
      const container = scrollRef.current;
      const halfWidth = container.scrollWidth / 2;

      // Incrementa la posizione dello scorrimento
      container.scrollLeft += 1;

      // Se abbiamo superato metà dello scorrimento, riportalo indietro
      if (container.scrollLeft >= halfWidth) {
        container.scrollLeft = 0;
      }

      // Richiedi un altro frame
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="striscia" ref={scrollRef}>
        {facolta.map((f,index) => (
          <div key={f.id+"str"} onClick={()=>navigate("/facolta/"+f.id)}>
            <span >{f.nome}</span>
            <PlusIcon style={{ width: "1rem", height: "1rem" }} />
          </div>
        ))}
      </div>
    </>
  );
}

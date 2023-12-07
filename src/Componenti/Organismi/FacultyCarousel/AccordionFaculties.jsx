import React, { useState, useRef,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import arrow_down from "../../../assets/arrow-right.png"
import { getFacoltas } from "../../../Firebase/RecuperoCopy";
import "./accordionFaculties.scss";

export function AccordionFaculties() {
    const [faculties, setFaculties] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchFaculties = async () => {
        try {
          const data = await getFacoltas();
          setFaculties(data);
        } catch (error) {
          console.error("Failed to fetch faculties", error);
        }
      };
  
      fetchFaculties();
    }, []);
  
    const handleToggle = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <div className="accordion-wrapper">
        {faculties.map((faculty, index) => (
          <div key={faculty.id} className="accordion-item">
            <div className="accordion-title" onClick={() => handleToggle(index)}>
              <h4>{faculty.nome}</h4>
              <img
                className={`arrow ${activeIndex === index ? "rotate" : ""}`}
                src={arrow_down}
                alt="Arrow Icon"
              />
            </div>
            {activeIndex === index && (
              <div className="accordion-content">
                <p>{faculty.descrizione}</p>
                <button onClick={() => navigate(`/facolta/${faculty.id}`)}>
                  Scopri di più
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
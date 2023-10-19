import React, { useState, useRef } from "react";
import arrow_right from "../../../assets/arrow-right.png";
import { faq } from "../../../assets/data";
import "./faq.scss";
export function Faq() {
  const wrapperRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
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

  return (
    <div
      className="faq-wrapper"
      ref={wrapperRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {faq.map((f, index) => (
        <div
          key={f + "-" + index}
          className={activeIndex === index ? "active" : ""}
        >
          <div onClick={() => handleToggle(index)}>
            <h4>{f.domanda}</h4> <img className="arrow" src={arrow_right} />
          </div>
          <div className="risposta">
            <p>{f.risposta}</p>
          </div>
          <div className="divider" />
        </div>
      ))}
      
    </div>
  );
}

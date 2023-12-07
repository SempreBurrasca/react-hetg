import React, { useState, useRef } from "react";
import "./contattilist.scss";
export function ContattiList() {
  const wrapperRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

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

  return (
    <div
      className="contatti-wrapper"
      ref={wrapperRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div>
        <h4>Segreteria degli studenti</h4>
        <span>Telefono (per chi chiama dall'Italia): <br/>+39 (351) 813-4963</span>
        <span>Email: segreteria@unicampushetg.ch</span>
        <div className="divider" />
      </div>

    </div>
  );
}

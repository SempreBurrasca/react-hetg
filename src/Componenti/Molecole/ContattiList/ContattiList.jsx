import React, { useState, useRef, useEffect } from 'react';
import './contattilist.scss';

export function ContattiList() {
  const wrapperRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [contatti, setContatti] = useState(null); // Initialize to null

  useEffect(() => {
    fetch('/copy/contattilist.json')
      .then(response => response.json())
      .then(data => {
        setContatti(data.it.contatti); // Populate the state with the fetched data
      })
      .catch(error => {
        console.error('Error fetching the contact data:', error);
      });
  }, []);

  const handleMouseDown = e => {
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

  const handleMouseMove = e => {
    if (!isDragging) return;
    e.preventDefault();
    const y = e.clientY;
    const walk = y - startPos;
    wrapperRef.current.scrollTop = scrollTop - walk;
  };

  if (!contatti) {
    return <div>Loading...</div>; // Display loading message or spinner while the data is being fetched
  }

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
        <h4>{contatti.header}</h4>
        <span>{contatti.telefono.label} <br/>{contatti.telefono.numero}</span>
        <span>{contatti.email.label}: {contatti.email.indirizzo}</span>
        <div className="divider" />
      </div>
    </div>
  );
}

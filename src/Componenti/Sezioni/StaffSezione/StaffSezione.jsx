import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StaffCarousel } from "../../../Componenti/Organismi/StaffCarousel/StaffCarousel";
import { Loader } from "../../Organismi/Loader/Loader";
import "./staff-sezione.scss";
export function StaffSezione(props) {
  const { type } = props;
  const navigate = useNavigate();
  const [copy, setCopy] = React.useState(null);
  useEffect(() => {
    fetch("/copy/copy.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Imposta lo stato con i dati per la lingua italiana (o qualsiasi altra logica di selezione della lingua)
        setCopy(data.it.StaffSezione);
      })
      .catch((error) => {
        console.error("Error fetching the copy data:", error);
      });
  }, []);

  if (!copy) {
    return <Loader />;
  }
  return (
    <section id="staff-sezione">
      <div className="content-wrapper">
        <h2 className="section-title">{copy.title}</h2>
        <p className="section-subtitle">
          {copy.description[0]}
          <br />
          <br />
          {copy.description[1]}
          <br />
          <br />
          {copy.description[2]}
        </p>
      </div>
      <StaffCarousel
        style={{ gridColumn: "7/12", gridRow: 1, justifySelf: "end" }}
        type={type}
      />
    </section>
  );
}

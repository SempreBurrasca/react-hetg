import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./all-facolta.scss";
import { getFacoltas } from "../../../Firebase/RecuperoCopy";
import { Button } from "../../Molecole/Buttons/Button";

export function AllFacolta() {
  const navigate = useNavigate();
  const [copy, setCopy] = React.useState(null);
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    console.log(faculties);
    if (faculties.length < 1) {
      const fetchFaculties = async () => {
        try {
          const data = await getFacoltas();
          setFaculties(data); // Assumi che 'data' sia un array di oggetti facoltà
        } catch (error) {
          console.error("Failed to fetch faculties", error);
        }
      };

      fetchFaculties();
    }
  }, [faculties]);

  return (
    <section id="all-facolta-section">
      <h2>Tutte le Facoltà</h2>
      {faculties.length > 1 &&
        faculties.map((f) => (
          <>
            <div
              className="list-facolta"
              onClick={() => navigate("/facolta/" + f.id)}
            >
              <h3>{f.heroTitle}</h3>
              <p>{f.infoParagraph}</p>
              <a  onClick={() => navigate("/facolta/" + f.id)}>Scopri di più</a>
            </div>
            <div className="divider-red" />
          </>
        ))}
    </section>
  );
}

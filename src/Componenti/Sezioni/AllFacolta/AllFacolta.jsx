import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./all-facolta.scss";
import { getFacoltas } from "../../../Firebase/RecuperoCopy";
import { Loader } from "../../Organismi/Loader/Loader";

export function AllFacolta(props) {
  const { isSearchable,search } = props;
  const navigate = useNavigate();
  const [copy, setCopy] = useState(null);
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    fetch("/copy/copy.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCopy(data.it.AllFacolta);
      })
      .catch((error) => {
        console.error("Error fetching the copy data:", error);
      });
  }, []);

  useEffect(() => {
    if (faculties.length < 1) {
      const fetchFaculties = async () => {
        try {
          const data = await getFacoltas();
          setFaculties(data); // Assumi che 'data' sia un array di oggetti facoltà
        } catch (error) {
          console.error(copy.messaggioErroreCaricamento, error);
        }
      };

      fetchFaculties();
    }
  }, [faculties, copy]);

  if (!copy) {
    return <Loader />;
  }
  if (isSearchable) {
    return (
      <section id="all-facolta-section">
        {faculties.length > 0 &&
          faculties.filter(f => f.heroTitle.toLowerCase().includes(search.toLowerCase()))
          .map((f) => (
            <div
              key={f.id}
              className="list-facolta"
              onClick={() => navigate("/facolta/" + f.id)}
            >
              <h3>{f.heroTitle}</h3>
              <p>{f.infoParagraph}</p>
              <a onClick={() => navigate("/facolta/" + f.id)}>
                {copy.testoLink}
              </a>
              <div className="divider-red" />
            </div>
          ))}
      </section>
    );
  }
  return (
    <section id="all-facolta-section">
      <h2>{copy.titoloSezione}</h2>
      {faculties.length > 0 &&
        faculties.map((f) => (
          <div
            key={f.id}
            className="list-facolta"
            onClick={() => navigate("/facolta/" + f.id)}
          >
            <h3>{f.heroTitle}</h3>
            <p>{f.infoParagraph}</p>
            <a onClick={() => navigate("/facolta/" + f.id)}>{copy.testoLink}</a>
            <div className="divider-red" />
          </div>
        ))}
    </section>
  );
}

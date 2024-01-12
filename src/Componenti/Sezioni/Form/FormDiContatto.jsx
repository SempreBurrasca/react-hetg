import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PlusIcon } from "../../../Componenti/Molecole/PlusIcon/PlusIcon";
import "./form-contatto.scss";
import { Form } from "../../Organismi/Form/Form";
import { Loader } from "../../Organismi/Loader/Loader";

export function FormDiContatto() {
  const [copy, setCopy] = useState(null);

  useEffect(() => {
    fetch("/copy/copy.json")
      .then((response) => response.json())
      .then((data) => {
        setCopy(data.it.FormDiContatto);
      })
      .catch((error) => {
        console.error("Error fetching the copy data:", error);
      });
  }, []);

  if (!copy) {
    return <Loader />;
  }

  return (
    <section id="form-contatto">
      <div className="row">
        <div className="content">
          <h2 className="section-title">
            {copy.titolo}
          </h2>
          <p>
            {copy.descrizione}
          </p>
        </div>
        <div className="plus">
          <PlusIcon isRed />
          <PlusIcon isRed />
        </div>
      </div>
      <div className="row">
        <div className="plus">
          <PlusIcon isRed />
          <PlusIcon isRed />
        </div>
        <div className="content">
          <Form />
        </div>
      </div>
    </section>
  );
}

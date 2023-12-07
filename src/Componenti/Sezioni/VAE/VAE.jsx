import React, { useEffect }  from "react";
import { Button } from "../../../Componenti/Molecole/Buttons/Button";
import { PlusIcon } from "../../../Componenti/Molecole/PlusIcon/PlusIcon";
import { useNavigate } from "react-router-dom";
import "./vae.scss";
import { Loader } from "../../Organismi/Loader/Loader";


export function VAE() {
  const navigate = useNavigate();
  const [copy, setCopy] = React.useState(null);
  useEffect(() => {
    fetch("/copy/sezionevae.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Imposta lo stato con i dati per la lingua italiana (o qualsiasi altra logica di selezione della lingua)
        setCopy(data.it);
      })
      .catch((error) => {
        console.error("Error fetching the copy data:", error);
      });
  }, []);

  if (!copy) {
    return <Loader />;
  }
  return (
    <section id="vae-sezione">
      <div className="row">
        <h2>
          {copy.title}
        </h2>
        <div/>
        <p>
          {copy.description}
        </p>
      </div>
      <div className="row-2">
        <div/>
        <PlusIcon isRed />
        <PlusIcon isRed />
        <PlusIcon isRed />
        <PlusIcon isRed />
        <Button
          style={{ position: "relative", gridRow: 3, gridColumn: "10/13" }}
          angleposition={{
            overTopRight: true,
            underBottomRight: true,
          }}
          borderradius="bottom-left-radius top-left-radius"
          path="vae-form"
        >
          {copy.button}
        </Button>
      </div>
    </section>
  );
}

import { PartnersLogo } from "../../../Componenti/Molecole/PartnersLogo/PartnersLogo";
import { PlusIcon } from "../../../Componenti/Molecole/PlusIcon/PlusIcon";
import { partnersData } from "../../../assets/data";
import { useNavigate } from "react-router-dom";
import "./sezione-partner.scss";
import React from "react";

export function PartnerSection() {
  const navigate = useNavigate();
  return (
    <section id="partner-sezione">
      <div className="row">
        <div className="black-col">
          <PlusIcon
            style={{
              gridColumn: 2,
              gridRow: "1",
            }}
          />
          <PlusIcon
            style={{
              gridColumn: 4,
              gridRow: "1",
            }}
          />
          <PlusIcon
            style={{
              gridColumn: 6,
              gridRow: "1",
            }}
          />
        </div>
        <div className="white-col">
          <h2 className="section-title"> Our Partners</h2>
        </div>
      </div>
      <PartnersLogo partners={partnersData} />
      <div className="plus-row">
        <PlusIcon
          style={{
            gridColumn: 2,
            gridRow: "3",
          }}
        />
        <PlusIcon
          style={{
            gridColumn: 5,
            gridRow: "3",
          }}
        />
        <PlusIcon
          style={{
            gridColumn: 7,
            gridRow: "3",
          }}
        />
        <PlusIcon
          style={{
            gridColumn: 9,
            gridRow: "3",
          }}
        />
        <PlusIcon
          style={{
            gridColumn: 12,
            gridRow: "3",
          }}
        />
      </div>
    </section>
  );
}

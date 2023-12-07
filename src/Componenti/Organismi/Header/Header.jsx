import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ComponentAngle from "../../../assets/tp_r.svg";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { Button } from "../../Molecole/Buttons/Button";
import "./header.scss";
import { useIsMobile } from "../../Tools/useIsMobile";
import { getPagina } from "../../../Firebase/RecuperoCopy";
import { Loader } from "../Loader/Loader";

export function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [copy, setCopy] = React.useState(null);
  const [links, setLinks] = React.useState({
    piattaforma: "#",
    xcom: "#",
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  });
  const isMobile = useIsMobile();
  const paginaId = "ESC5PlPkVuTTq875tAqj";
  useEffect(() => {
    setIsMenuActive(false);
    fetch("/copy/header.json")
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

    fetch("/copy/links.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Imposta lo stato con i dati per la lingua italiana (o qualsiasi altra logica di selezione della lingua)
        setLinks(data.it);
      })
      .catch((error) => {
        console.error("Error fetching the copy data:", error);
      });
  }, []);
useEffect(()=>{
  console.log("links=>",links)
},[links])
  const navigate = useNavigate();
  const handleNavigate = (arg) => {
    navigate(arg);
    setIsMenuActive(false);
  };
  const handleMenuClick = () => {
    setIsMenuActive(!isMenuActive);
  };

  if (!copy) {
    return <Loader />;
  }

  return (
    <>
      <div id="top-frame"></div>
      <div id="bottom-frame"></div>
      <div id="left-frame"></div>
      <div id="right-frame"></div>
      <img id="bottom-left-angle" src={ComponentAngle} />
      <img id="bottom-right-angle" src={ComponentAngle} />
      <Logo />
      <Nav copy={copy} links={links} />
      {!isMobile && (
        <Button
          style={{ position: "fixed", top: "1rem", right: 0, zIndex: 5 }}
          angleposition={{
            topLeft: true,
            bottomLeft: false,
            topRight: false,
            bottomRight: false,
          }}
          borderradius="bottom-left-radius"
          path="contattaci"
        >
          {copy.header[6]}
        </Button>
      )}
      {isMobile && (
        <div className="mobile-nav" onClick={handleMenuClick}>
          <span>{isMenuActive ? copy.header[8] : copy.header[7]}</span>
        </div>
      )}
      {isMobile && (
        <div className={`mobile-menu ${isMenuActive ? "active" : ""}`}>
          <ul>
            <li className="menu-item" onClick={() => handleNavigate("/")}>
              {copy.header[0]}
            </li>
            <li
              className="menu-item"
              onClick={() => handleNavigate("/academic-avenues")}
            >
              {copy.header[1]}
            </li>
            <li
              className="menu-item"
              onClick={() => handleNavigate("/student-central")}
            >
              {copy.header[2]}
            </li>
            <li
              className="menu-item"
              onClick={() => handleNavigate("/legacy-lane")}
            >
              {copy.header[3]}
            </li>
            <li
              className="menu-item"
              onClick={() => handleNavigate("/gateway-growth")}
            >
              {copy.header[4]}
            </li>
            <li
              className="menu-item"
              onClick={() => handleNavigate("/student-central/staff-management")}
            >
              {copy.header[9]}
            </li>
            <li className="menu-item" onClick={() => handleNavigate(links.piattaforma)}>
              {copy.header[5]}
            </li>
            <li
              className="menu-item"
              onClick={() => handleNavigate("/contattaci")}
            >
              {copy.header[6]}
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

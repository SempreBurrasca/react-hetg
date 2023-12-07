import React,{ useEffect } from "react";

export function TestoConAcapo({ testo }) {

  if(testo&&testo.includes("\n")){
    const paragraphs = testo.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));

      return <React.Fragment >{paragraphs}  </React.Fragment>}
      else{
        return  <React.Fragment >{testo}</React.Fragment>
      }
  }
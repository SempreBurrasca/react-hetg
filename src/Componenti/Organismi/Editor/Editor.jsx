import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";

const Editor = ({  onBlocksChange, blocks  }) => {
  const ejInstance = useRef();

  // Inizializza Editor.js al montaggio del componente
  useEffect(() => {
    if (!ejInstance.current) {
      ejInstance.current = new EditorJS({
        // Id del contenitore dell'editor
        holder: "editorjs",
        // Strumenti da utilizzare
        tools: {
          header: Header,
          list: List,
          paragraph: {
            class: Paragraph,
            inlineToolbar: true,
          },
        },
        data: {
          blocks // Assicurati che i blocchi siano nel formato corretto per EditorJS
        },
        onChange: async () => {
          const outputData = await ejInstance.current.save();
          onBlocksChange(outputData.blocks); // Passa i blocchi aggiornati
        },
      });
    }

    // Pulizia e distruzione dell'istanza di Editor.js
    return () => {
      if (ejInstance.current && typeof ejInstance.current.destroy === 'function') {
        ejInstance.current.destroy();
      }
      ejInstance.current = null;
    };
  }, [onBlocksChange, blocks]);

  return <div id="editorjs" />;
};

export default Editor;

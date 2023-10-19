import { Button } from "../Buttons/Button";
import { PlusIcon } from "../PlusIcon/PlusIcon";
import "./striscia.scss";
import { useRef, useEffect } from "react";

export function Striscia(props) {
  const scrollRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    function animate() {
      const container = scrollRef.current;
      const halfWidth = container.scrollWidth / 2;

      // Incrementa la posizione dello scorrimento
      container.scrollLeft += 1;

      // Se abbiamo superato metà dello scorrimento, riportalo indietro
      if (container.scrollLeft >= halfWidth) {
        container.scrollLeft = 0;
      }

      // Richiedi un altro frame
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="striscia" ref={scrollRef}>
        {[...Array(52)].map(() => (
          <>
            <span>Facoltà X</span>
            <PlusIcon style={{ width: "1rem", height: "1rem" }} />
          </>
        ))}
      </div>
    </>
  );
}

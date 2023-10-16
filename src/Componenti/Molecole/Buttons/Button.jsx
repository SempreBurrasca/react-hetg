import arrow_right from "../../../assets/arrow-right.png";
import ComponentAngle from "../../../assets/tp_r.svg";
import "./button.scss";
export function Button(props) {
  const { angleposition, borderradius } = props;
  return (
    <>
      {
        //manca da fare la funzione di callback al botton
      }
      <div className="button-wrapper" {...props}>
        {angleposition.topLeft && (
          <img className="top-left-angle" src={ComponentAngle} />
        )}
        {angleposition.overTopLeft && (
          <img className="over-top-left-angle" src={ComponentAngle} />
        )}
        {angleposition.bottomLeft && (
          <img className="bottom-left-angle" src={ComponentAngle} />
        )}
        {angleposition.underBottomLeft && (
          <img className="under-bottom-left-angle" src={ComponentAngle} />
        )}
        <div className={borderradius + " button-container"}>
          <span className="cta-button">{props.children}</span>
          <img className="arrow" src={arrow_right} />
        </div>

        {angleposition.topRight && (
          <img className="top-right-angle" src={ComponentAngle} />
        )}
        {angleposition.overTopRight && (
          <img className="over-top-right-angle" src={ComponentAngle} />
        )}
        {angleposition.bottomRight && (
          <img className="bottom-right-angle" src={ComponentAngle} />
        )}
        {angleposition.underBottomRight && (
          <img className="under-bottom-right-angle" src={ComponentAngle} />
        )}
      </div>
    </>
  );
}

import plusIcon from "../../../assets/plus-icon.svg";
import plusIconRed from "../../../assets/plus-icon-red.png";
import "./plus_icon.scss";
export function PlusIcon(props) {
  return (
    <>
      <img src={props.isRed?plusIconRed:plusIcon} className="plus-icon" {...props}/>
    </>
  );
}

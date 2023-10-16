import plusIcon from "../../../assets/plus-icon.svg";
import "./plus_icon.scss";
export function PlusIcon(props) {
  return (
    <>
      <img src={plusIcon} className="plus-icon" {...props}/>
    </>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  // faComment,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { faComment, faShareFromSquare } from "@fortawesome/free-regular-svg-icons";

function formattedText(text) {
  if (Number(text) >= 1000) {
    const result = `${(Number(text) / 1000).toFixed(1)}k`;
    return result;
  }
  return text;
}

export default function Button({ btnType, text, selected, ...props }) {
  let buttonClasses =
    "text-[0.7rem] sm:text-sm font-medium py-1.5 px-3.5 rounded-full hover:cursor-pointer hover:text-white hover:bg-orange-600 active:bg-orange-600 active:text-white";

  if (selected) {
    buttonClasses += " text-white bg-orange-600";
  } else {
    buttonClasses += " border-1 border-stone-400 bg-stone-100 hover:border-orange-600";
  }

  let buttonContent;

  if (btnType === "votes") {
    buttonContent = (
      <>
        <FontAwesomeIcon icon={faArrowUp} />  
        {formattedText(text)}
        <FontAwesomeIcon icon={faArrowDown} />
      </>
    );
  } else if (btnType === "comments") {
    buttonContent = (
      <>
        <FontAwesomeIcon icon={faComment} />
        {formattedText(text)}
      </>
    );
  } else if (btnType === "share") {
    buttonClasses += " "

    buttonContent = (
      <>
        <FontAwesomeIcon icon={faShareFromSquare} />
        {text}
      </>
    );
  } else {
    buttonContent = text;
  }

  return (
    <button className={buttonClasses} {...props}>
      <span className="flex gap-1 sm:gap-2 items-center ">
        {buttonContent}
      </span>
    </button>
  );
}

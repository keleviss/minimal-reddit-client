import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faComment, faShare } from '@fortawesome/free-solid-svg-icons';

export default function Button({ btnType, text, selected, ...props }) {
  let buttonClasses = "text-sm font-medium py-1.5 px-3.5 rounded-full hover:cursor-pointer hover:text-white hover:bg-orange-600";

  if (selected) {
    buttonClasses += " text-white bg-orange-600";
  } else {
    buttonClasses += " bg-stone-300";
  }

  let buttonContent;

  if (btnType === "votes") {
    buttonContent = (
      <>
        <FontAwesomeIcon icon={faArrowUp} />
        {text}
        <FontAwesomeIcon icon={faArrowDown} />
      </>
    );
  } else if (btnType === "comments") {
    buttonContent = (
      <>
        <FontAwesomeIcon icon={faComment} />
        {text}
      </>
    );
  } else if (btnType === "share") {
    buttonContent = (
      <>
        <FontAwesomeIcon icon={faShare} />
        {text}
      </>
    );
  } else {
    buttonContent = text;
  }

  return (
    <button
      className={buttonClasses}
      {...props}
    >
      <div className='flex gap-2 items-center'>
        {buttonContent}
      </div>
    </button>
  );
}
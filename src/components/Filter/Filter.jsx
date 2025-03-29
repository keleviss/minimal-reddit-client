import { useEffect, useState } from "react";
import styles from "./Filter.module.css";

export default function Filter({ options }) {
  const [currentOption, setCurrentOption] = useState(options[0]);
  const [isClicked, setIsClicked] = useState(false);

  function handleOptionClick(event) {
    setCurrentOption(event.target.textContent);
  }

  function handleFilterClick() {
    setIsClicked((prev) => !prev);
  }

  const handleBlur = ({ target }) => {
    if (target.id === currentOption || target.textContent === currentOption) {
      return;
    } else {
      setIsClicked(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleBlur);

    return () => {
      document.removeEventListener('click', handleBlur)
    }
  })

  if (!options) {
    return <></>;
  }

  return (
    <div id={currentOption} className={styles.filter} onClick={handleFilterClick}>
      <span>{currentOption}</span>
      {isClicked ? (
        <ul className={styles.filterOptions}>
          {options.map((option, i) =>
            <li key={i} onClick={handleOptionClick}>{option}</li>
          )}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}
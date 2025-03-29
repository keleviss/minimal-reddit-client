import { useState } from "react";
import styles from "./Filter.module.css";

export default function Filter({ options }) {
  const [currentOption, setCurrentOption] = useState(options[0]);

  function handleOptionClick({ target }) {
    setCurrentOption(target.value);
  }

  if (!options) {
    return <></>;
  }

  console.log("FILTER RENDERED");

  return (
    <select
      className={styles.filter}
      value={currentOption}
    >
      {options.map((option, i) => 
        <option onClick={handleOptionClick} key={`${i}-${option}`} value={option}>{option}</option>
      )}
    </select>
  );
}
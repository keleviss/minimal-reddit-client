import Button from "../Button/Button";
import styles from "./Filters.module.css";

const buttons = ["Best", "Hot", "New", "Top", "Rising"];

export default function Filters() {

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filtersGroup}>
        {buttons.map((button, i) => 
          <Button key={`${button}-${i}`} text={button}/>
        )}
      </div>
    </div>
  );
}
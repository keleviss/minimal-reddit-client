import Filter from "../Filter/Filter";
import styles from "./Filters.module.css";

const sortingOptions = ["Best", "Hot", "New", "Top"];

export default function Filters() {

  console.log("FILTERS RENDERED");

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filtersGroup}>
        <Filter options={sortingOptions}/>
      </div>
      <button className={styles.resetBtn}>Reset</button>
    </div>
  );
}
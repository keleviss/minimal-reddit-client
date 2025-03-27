import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.NavBarContainer}>
      <div className={styles.NavBar}>
        <Link to="/">
          <h1 className={styles.NavBarLogo}>Reddit Minified</h1>
        </Link>
        <SearchBar />
      </div>
    </nav>
  );
}
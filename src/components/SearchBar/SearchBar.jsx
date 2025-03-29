import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  return (
    <form className={`${styles.SearchBarContainer} ${isFocused ? styles.hovered : ""}`} onSubmit={handleSubmit}>
      <FontAwesomeIcon
        className={styles.SearchIcon}
        icon={faSearch}
        color="#FF3C00"
        onClick={handleSubmit}
      />
      <input
        className={styles.SearchInput}
        type="text"
        placeholder="Search Reddit Minified"
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {searchTerm && (
        <FontAwesomeIcon
          className={styles.XIcon}
          icon={faXmark}
          color="#FF3C00"
          onClick={() => setSearchTerm("")}
        />
      )}
    </form>
  );
}

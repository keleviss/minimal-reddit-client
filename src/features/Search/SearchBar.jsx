import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    } else {
      console.log("Search term is empty");
    }
  };

  function handleSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleClearSearch() {
    setSearchTerm("");
  }

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  return (
    <form
    className={`md:w-100  py-2 px-4 flex justify-between gap-2.5 items-center rounded-4xl border-1 ${isFocused ? "border-orange-600" : "border-stone-300"}`}
      onSubmit={handleSubmit}
    >
      <FontAwesomeIcon
        className="hover:cursor-pointer"
        icon={faSearch}
        color="#FF3C00"
        onClick={handleSubmit}
      />
      <input
        className="w-full border-0 outline-0 bg-transparent text-4.5 text-stone-100"
        type="text"
        placeholder="Search Reddit Mini"
        value={searchTerm}
        onChange={(e) => handleSearchChange(e)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <FontAwesomeIcon
        className="hover:cursor-pointer"
        visibility={searchTerm ? "visible" : "hidden"}
        icon={faXmark}
        color="#FF3C00"
        onClick={handleClearSearch}
      />
    </form>
  );
}

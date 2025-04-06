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

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  let iconClasses = "hover:cursor-pointer";

  return (
    <form
    className={`md:w-100  py-2 px-4 flex justify-between gap-2.5 items-center rounded-4xl border-1 ${isFocused ? "border-orange-600" : "border-stone-300"}`}
      onSubmit={handleSubmit}
    >
      <FontAwesomeIcon
        className={iconClasses}
        icon={faSearch}
        color="#FF3C00"
        onClick={handleSubmit}
      />
      <input
        className="w-full border-0 outline-0 bg-transparent text-4.5 text-stone-100"
        type="text"
        placeholder="Search Reddit Mini"
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <FontAwesomeIcon
        className={iconClasses}
        visibility={searchTerm ? "visible" : "hidden"}
        icon={faXmark}
        color="#FF3C00"
        onClick={() => setSearchTerm("")}
      />
    </form>
  );
}

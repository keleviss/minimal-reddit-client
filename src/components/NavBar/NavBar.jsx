import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar() {
  return (
    <nav className="w-full fixed z-50 py-4 px-4 lg:px-0 bg-stone-800 border-b-1 border-b-stone-300 flex justify-center">
      <div className="w-4xl flex justify-between items-center">
        <Link to="/">
          <h1 className="text-xl lg:text-2xl whitespace-nowrap font-bold text-orange-600">Reddit Mini</h1>
        </Link>
        <SearchBar />
      </div>
    </nav>
  );
}
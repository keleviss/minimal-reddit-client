import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar() {
  return (
    <nav className="w-full py-4 border-b-1 border-b-stone-300 flex justify-center">
      <div className="w-4xl flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-semibold text-orange-600">Reddit Minified</h1>
        </Link>
        <SearchBar />
      </div>
    </nav>
  );
}
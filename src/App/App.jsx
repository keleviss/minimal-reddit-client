import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "../components/NavBar/NavBar";
import Home from "../pages/Home";
import SearchResults from "../pages/SearchResults";
import PostDetails from "../pages/PostDetails";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":sort" element={<Home />} />
        </Route>
        <Route path="/search" element={<SearchResults />} />
        <Route path="/post" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

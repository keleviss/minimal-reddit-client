import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "../components/NavBar/NavBar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<DefaultView />}>
            
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
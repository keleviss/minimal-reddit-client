import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "../components/NavBar/NavBar";
import DefaultView from "../components/DefaultView/DefaultView";

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
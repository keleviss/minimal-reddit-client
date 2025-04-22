import { Outlet } from "react-router";
import NavBar from "../components/NavBar/NavBar";

export default function Root() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

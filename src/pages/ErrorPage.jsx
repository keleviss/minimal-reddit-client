import { useNavigate } from "react-router";
import Button from "../components/Button/Button";
import NavBar from "../components/NavBar/NavBar";

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleNavigateBackHome = () => {
    navigate("");
  }

  return (
    <>
      <NavBar />
      <div className="flex justify-center">
        <div className="w-4xl mt-30 sm:mt-40 text-center">
          <h2 className="font-medium mb-5">Oops! Something went wrong!</h2>
          <Button text="Go back to home page" onClick={handleNavigateBackHome}/>
        </div>
      </div>
    </>
  );
}
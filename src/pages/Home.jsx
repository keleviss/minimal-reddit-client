import Filters from "../components/Filters/Filters";

export default function Home() {
  console.log("HOME RENDERED");

  return (
    <div className="container">
      <div className="container-fit">
        <Filters />
      </div>
    </div>
  );
}
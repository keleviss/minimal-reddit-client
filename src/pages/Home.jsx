import Filters from "../components/Filters/Filters";

export default function Home() {
  console.log("HOME RENDERED");

  return (
    <div className="w-full flex justify-center">
      <div className="w-4xl">
        <Filters />
      </div>
    </div>
  );
}
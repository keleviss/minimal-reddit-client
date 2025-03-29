import Sorts from "../features/Sorts/Sorts";
import Posts from "../features/Posts/Posts";

export default function Home() {

  return (
    <div className="w-full flex justify-center">
      <div className="w-4xl">
        <Sorts />
        <Posts />
      </div>
    </div>
  );
}
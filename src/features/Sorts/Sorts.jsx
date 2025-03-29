import Button from "../../components/Button/Button";

const buttons = ["Best", "Hot", "New", "Top", "Rising"];

export default function Sorts() {

  return (
    <div className="flex justify-between items-center py-12">
      <div className="flex gap-4">
        {buttons.map((button, i) => 
          <Button key={`${button}-${i}`} text={button}/>
        )}
      </div>
    </div>
  );
}
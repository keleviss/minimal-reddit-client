import Button from "../Button/Button";

const buttons = ["Best", "Hot", "New", "Top", "Rising"];

export default function Filters() {

  return (
    <div className="flex justify-between items-center py-6">
      <div className="flex gap-4">
        {buttons.map((button, i) => 
          <Button key={`${button}-${i}`} text={button}/>
        )}
      </div>
    </div>
  );
}
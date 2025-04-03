import { useState } from "react";
import Button from "../../components/Button/Button";

const initialButtons = [
  { text: "Best", selected: true },
  { text: "Hot", selected: false },
  { text: "New", selected: false},
  { text: "Top", selected: false},
  { text: "Rising", selected: false },
];

export default function Sorts() {
  const [buttons, setButtons] = useState(initialButtons);

  function handleClick({ target }) {
    const selectedButton = target.textContent;
    const updatedButtons = initialButtons.map(button => {
      if (button.text === selectedButton) {
        return { text: button.text, selected: true };
      }
      return { text: button.text, selected: false };
    });
    setButtons(updatedButtons);
  }

  return (
    <div className="w-4xl fixed z-40 bg-white border-b-1 flex justify-between items-center mt-18 py-6">
      <div className="flex gap-4">
        {buttons.map((button, i) =>
          <Button 
            key={`${button.text}-${i}`} 
            text={button.text} 
            selected={button.selected} 
            onClick={handleClick}
          />
        )}
      </div>
    </div>
  );
}
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
    <div className="w-full fixed z-40 mt-18 px-4 lg:px-0 bg-white flex justify-center overflow-scroll">
      <div className="w-4xl flex gap-4 py-6 border-b-1 border-b-stone-300">
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
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router";

const initialButtons = [
  { text: "Best", value: "best", selected: true },
  { text: "Hot", value: "hot", selected: false },
  { text: "New", value: "new", selected: false },
  { text: "Top", value: "top", selected: false },
  { text: "Rising", value: "rising", selected: false },
];

export default function Sorts() {
  const [buttons, setButtons] = useState(initialButtons);
  const navigate = useNavigate();

  function handleClick({ target }) {
    const selectedButton = target.textContent;
    const updatedButtons = initialButtons.map((button) => {
      if (button.text === selectedButton) {
        return { ...button, selected: true };
      }
      return { ...button, selected: false };
    });
    setButtons(updatedButtons);
  }

  useEffect(() => {
    const selectedButton = buttons.find((button) => button.selected);
    navigate(`/${selectedButton.value}`);
  }, [buttons]);

  return (
    <div className="w-full fixed z-40 mt-14 sm:mt-18 px-4 lg:px-0 bg-white flex justify-center">
      <div className="w-4xl flex gap-4 py-3 sm:py-6 border-b-1 border-b-stone-300 overflow-x-scroll sm:overflow-auto">
        {buttons.map((button, i) => (
          <Button
            key={`${button.text}-${i}`}
            text={button.text}
            selected={button.selected}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

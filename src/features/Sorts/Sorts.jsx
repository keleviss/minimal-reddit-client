import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { useNavigate, useParams } from "react-router";

const initialButtons = [
  { text: "Best", value: "best", selected: true },
  { text: "Hot", value: "hot", selected: false },
  { text: "New", value: "new", selected: false },
  { text: "Top", value: "top", selected: false },
  { text: "Rising", value: "rising", selected: false },
];

export default function Sorts() {
  const [buttons, setButtons] = useState(initialButtons);
  const { sort } = useParams();
  const navigate = useNavigate();

  function handleClick({ target }) {
    const slug = target.textContent.toLowerCase();
    navigate(`/${slug}`);
  }

  useEffect(() => {
    const selectedButton = buttons.find((button) => button.value === sort);

    if (!selectedButton) {
      const updatedButtons = initialButtons.map((button, i) =>
        i === 0 ? { ...button, selected: true } : button
      );
      setButtons(updatedButtons);
    } else {
      const updatedButtons = initialButtons.map((button) => {
        if (button.value === selectedButton.value) {
          return { ...button, selected: true };
        }
        return { ...button, selected: false };
      });
      setButtons(updatedButtons);
    }
  }, [sort]);

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

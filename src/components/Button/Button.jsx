export default function Button({ text, selected, ...props }) {
  let buttonClasses = "text-sm font-medium py-1.5 px-3.5 rounded-full hover:cursor-pointer hover:bg-orange-500";

  if (selected) {
    buttonClasses += " bg-orange-600";
  } else {
    buttonClasses += " bg-stone-200";
  }

  return (
    <button 
      className={buttonClasses}
      {...props}
    >
      {text}
    </button>
  );
}
export default function Image({ imageURL }) {
  return (
    <div
      className="w-full rounded-2xl bg-center bg-cover border-1 border-gray-500 overflow-hidden"
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <div className="flex justify-center items-center backdrop-blur-2xl">
        <img className="w-full max-h-150" src={imageURL} alt="" />
      </div>
    </div>
  );
}
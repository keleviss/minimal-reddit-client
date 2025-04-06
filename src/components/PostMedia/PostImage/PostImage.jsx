import { useState } from "react";

export default function PostImage({ imageURL }) {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  function handleImageLoad() {
    setIsLoading(false);
  }

  function handleImageError() {
    setImageError(true);
    setIsLoading(false);
  }

  return (
    <div
      className={`w-full ${
        isLoading && "h-150"
      } rounded-2xl bg-center bg-cover border-1 border-gray-500 overflow-hidden`}
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <div className="flex justify-center items-center backdrop-blur-2xl">
        {imageError && <p>Couldn't load image. Please try again later.</p>}
        {!imageError && (
          <img
            onLoad={handleImageLoad}
            onError={handleImageError}
            className="max-h-150"
            src={imageURL}
            alt=""
          />
        )}
      </div>
    </div>
  );
}

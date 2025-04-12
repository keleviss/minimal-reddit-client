import { useEffect, useState } from "react";
import PostImage from "../PostImage/PostImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function ImageGallery({ imageURLs }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hasNext = currentImageIndex < imageURLs.length - 1;
  const hasPrev = currentImageIndex > 0;
  const currentImageURL = imageURLs[currentImageIndex];

  useEffect(() => {
    if (currentImageIndex + 1 < imageURLs.length) {
      const img = new Image();
      img.src = imageURLs[currentImageIndex + 1];
    }
  }, [currentImageIndex]);

  function handleShowNextImage() {
    if (hasNext) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    } else {
      console.log("NO NEXT IMAGE");
    }
  }

  function handleShowPrevImage() {
    if (hasPrev) {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
    } else {
      console.log("NO PREV IMAGE");
    }
  }

  return (
    <div className="w-full grid items-center">
      {hasPrev && (
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          onClick={() => handleShowPrevImage()}
          className="text-orange-600 text-xl absolute z-10 justify-self-start m-4 hover:scale-150 transition-transform"
        />
      )}
      {hasNext && (
        <FontAwesomeIcon
          icon={faCircleArrowRight}
          onClick={() => handleShowNextImage()}
          className="text-orange-600 text-xl absolute z-10 justify-self-end m-4 hover:scale-150 transition-transform"
        />
      )}
      <div className="flex gap-1 items-center bg-stone-700 rounded-full p-1 m-2 text-[0.5rem] text-orange-50 absolute z-10 self-end justify-self-center transition-colors">
        {imageURLs.map((url, index) => (
          <FontAwesomeIcon
            key={`${url}-icon`}
            icon={faCircle}
            className={
              currentImageIndex === index ? "text-[0.6rem] text-orange-600" : ""
            }
          />
        ))}
      </div>
      <PostImage key={currentImageIndex} imageURL={currentImageURL} />
    </div>
  );
}

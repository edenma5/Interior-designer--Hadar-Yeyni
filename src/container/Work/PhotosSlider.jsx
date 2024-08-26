import { useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { urlFor } from "../../client";
import { motion } from "framer-motion";

const PhotosSlider = ({
  isOpen,
  prevImage,
  nextImage,
  currentImage,
  images,
  toggleSlider,
}) => {
  const imageUrl =
    images && images[currentImage] ? urlFor(images[currentImage]).url() : "";

  // Add event listener for "esc" key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        toggleSlider();
      } else if (event.key === "ArrowRight") {
        nextImage();
      } else if (event.key === "ArrowLeft") {
        prevImage();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    }

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, toggleSlider]);

  return (
    <div>
      <div className="photos-slider-wrapper">
        {isOpen && (
          <div className={`photos-slider-container ${isOpen ? "open" : ""}`}>
            {/* Overlay div to handle clicks on the dead area */}
            <div className="photos-slider-overlay" onClick={toggleSlider}></div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="photos-slider-parent"
            >
              <div className="photos-slider">
                <button className="close-btn" onClick={toggleSlider}>
                  X
                </button>
                <button
                  className="image-button prev-image-button"
                  onClick={prevImage}
                >
                  <FaArrowAltCircleLeft />
                </button>
                {imageUrl ? (
                  <motion.img
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    exit={{ x: -300, opacity: 0 }}
                    src={imageUrl}
                    className="image-block"
                  />
                ) : (
                  <p className="no-images-alert">לא נמצאו תמונות להצגה</p>
                )}
                <button
                  className="image-button next-image-button"
                  onClick={nextImage}
                >
                  <FaArrowAltCircleRight />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotosSlider;

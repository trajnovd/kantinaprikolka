import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ImageCarousel = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Disable scrolling on the body when the carousel is open
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling
    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling when the carousel is closed
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, onClose]);

  const handleTouchStart = (e) =>
    setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) =>
    setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) nextSlide();
    if (touchStart - touchEnd < -50) prevSlide();
  };

  const nextSlide = () =>
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1,
    );

  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1,
    );

  return (
    <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center">
      <button
        onClick={onClose}
        className="fixed top-4 right-4 text-white text-4xl z-[99999] hover:opacity-75
          transition-opacity"
      >
        &times;
      </button>

      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 text-white text-3xl md:text-4xl z-50 p-2
          hover:bg-black/20 rounded-full"
      >
        &#10094;
      </button>

      <div
        className="relative w-full h-full flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[currentIndex]}
          alt={`Gallery ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 text-white text-3xl md:text-4xl z-50 p-2
          hover:bg-black/20 rounded-full"
      >
        &#10095;
      </button>

      {/* Number Indicator */}
      <div className="fixed bottom-4 text-white text-lg md:text-xl z-50">
        {`${currentIndex + 1}/${images.length}`}
      </div>
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialIndex: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageCarousel;

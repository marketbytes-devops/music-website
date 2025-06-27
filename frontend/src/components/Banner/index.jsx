import PropTypes from "prop-types";
import StarTitle from "../StarTitle";
import Button from "../Button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BookNowModal from "../UiComponents/BookNowModal";

const Banner = ({ title, subtitleFirst, subtitles }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitleIndex((prevIndex) => 
        (prevIndex + 1) % subtitles.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [subtitles.length]);

  const gradientStyles = subtitles.map((subtitle, index) => `
    .gradient-text-${index} {
      background: linear-gradient(to bottom, ${subtitle.gradient[0]}, ${subtitle.gradient[1]});
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      text-shadow: 0 0 4px rgba(254, 11, 134, 0.6);
    }
  `).join("\n");

  const handleBookNowClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <header
      className="h-[400px] md:h-[500px] bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>{gradientStyles}</style>
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        <StarTitle
          title={title}
          isParentHovered={isHovered}
          className="text-lg xs:text-lg sm:text-xl md:text-xl lg:text-xl"
        />
        <div>
          <h1 className="text-textGray text-center primary-font text-3xl sm:text-4xl md:text-5xl">
            <span className="block mb-6 font-thin">{subtitleFirst}</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentSubtitleIndex}
                className={`gradient-text-${currentSubtitleIndex}`}
                initial={{ scale: 0.2, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.2, opacity: 0.5 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {subtitles[currentSubtitleIndex].text}
              </motion.span>
            </AnimatePresence>
          </h1>
        </div>
        <div className="pt-10 md:pt-20">
          <Button
            name="Book Now"
            className="text-textGray text-sm font-normal bg-black px-6 py-3 transition-colors duration-300"
            onClick={handleBookNowClick}
            dotColor="bg-textOrange"
            gradient="bg-gradient-to-b from-[#F96141] via-[#662451] to-[#4D147E]"
            aria-label="Book a musician now"
          />
        </div>
      </div>
      <BookNowModal isOpen={isModalOpen} onClose={handleModalClose} />
    </header>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitleFirst: PropTypes.string.isRequired,
  subtitles: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      gradient: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Banner;
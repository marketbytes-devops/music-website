import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import homeData from "../../../assets/data/homeData";
import heroSliderImg from "../../../assets/images/hero-slider-1.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import { useCallback, useMemo, useRef, useState } from "react";
import Icon from "../../../components/Icons";
import { motion } from "framer-motion";
import BookNowModal from "../../../components/UiComponents/BookNowModal";
import Button from "../../../components/Button";

const CAROUSEL_SETTINGS = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  arrows: false,
  waitForAnimate: false,
  adaptiveHeight: false,
  dotsClass: "slick-dots custom-dots",
  customPaging: (i) => (
    <motion.button
      key={i}
      aria-label={`Go to slide ${i + 1}`}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    />
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        dots: false,
        fade: false,
      },
    },
  ],
  accessibility: true,
  focusOnSelect: true,
};

const SLIDER_SETTINGS = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  verticalSwiping: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: false,
        verticalSwiping: false,
      },
    },
  ],
};

const SLIDER_IMAGES = [
  {
    id: 1,
    src: heroSliderImg,
    alt: "Event music performance 1",
    title: "Live Jazz Night",
  },
  {
    id: 2,
    src: heroSliderImg,
    alt: "Event music performance 2",
    title: "Rock Concert",
  },
  {
    id: 3,
    src: heroSliderImg,
    alt: "Event music performance 3",
    title: "Classical Evening",
  },
  {
    id: 4,
    src: heroSliderImg,
    alt: "Event music performance 4",
    title: "Pop Music Fest",
  },
  {
    id: 5,
    src: heroSliderImg,
    alt: "Event music performance 5",
    title: "Indie Music Night",
  },
];

const Hero = ({ homeData: propHomeData = homeData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const marqueeItems = useMemo(() => {
    if (!propHomeData?.marquee?.length) {
      return (
        <motion.p
          className="text-sm text-textGray"
          role="status"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          No featured artists available.
        </motion.p>
      );
    }

    return propHomeData.marquee.map((item) => (
      <motion.div
        key={item.id}
        className="mx-3 sm:mx-4 flex items-center space-x-3 text-textGray"
        role="group"
        aria-label={`Artist ${item.position}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: item.id * 0.1 }}
      >
        <motion.img
          src={item.image}
          alt={item.alt || `Image for ${item.position}`}
          className="w-10 h-10 object-cover rounded-full"
          loading="lazy"
          width="40"
          height="40"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <p className="text-xs font-medium">{item.position}</p>
      </motion.div>
    ));
  }, [propHomeData]);

  const sliderCallbacks = useMemo(
    () => ({
      beforeChange: (currentSlide, nextSlide) =>
        console.log("before change", currentSlide, nextSlide),
      afterChange: (currentSlide) => console.log("after change", currentSlide),
    }),
    []
  );

  const handleBookNowClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const sliderRef = useRef(null);

  const handleRestartClick = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, []);

  return (
    <>
      <style jsx>{`
        .custom-dots {
          bottom: 13px;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .custom-dots li {
          margin: 0 4px;
        }
        .custom-dots li button {
          width: 10px;
          height: 10px;
          background-color: #A6A6A6;
          border-radius: 9999px;
          border: none;
          padding: 0;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .custom-dots li button:before {
          content: '';
          display: none;
        }
        .custom-dots li.slick-active button {
          width: 24px;
          height: 10px;
          background-color: #A6A6A6;
          border-radius: 9999px;
          margin: 0 -4px;
        }
      `}</style>

      <div className="relative hidden xs:hidden sm:hidden md:block lg:block xl:block">
        <Marquee
          pauseOnHover
          gradient={false}
          speed={80}
          className="py-2 border-y border-textGray/10 bg-black"
          aria-label="Featured artists marquee"
        >
          {marqueeItems}
        </Marquee>

        <section
          className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center h-[400px] md:h-[500px] px-4 py-8"
          aria-labelledby="hero-title"
        >
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <motion.h1
              id="hero-title"
              className="max-w-md text-3xl sm:text-4xl md:text-5xl font-medium text-textGray secondary-font"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Great Events Start with Great Music
            </motion.h1>
            <motion.p
              className="text-sm sm:text-base text-textGray max-w-sm primary-font"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover top musicians, book effortlessly, and make your event
              unforgettable.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
            >
              <Button
                name="Book Now"
                className="text-textGray text-sm font-normal bg-black px-6 py-3 transition-colors duration-300"
                onClick={handleBookNowClick}
                dotColor="bg-textOrange"
                gradient="bg-gradient-to-b from-[#F96141] via-[#662451] to-[#4D147E]"
                aria-label="Book a musician now"
              />
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mt-6 md:mt-14">
            <div className="w-full sm:w-1/2">
              <div
                className="slider-container h-[400px] md:h-[500px]"
                aria-label="Main event images"
              >
                <Slider {...CAROUSEL_SETTINGS} ref={sliderRef}>
                  {SLIDER_IMAGES.map((image) => (
                    <motion.div
                      key={image.id}
                      className="overflow-hidden relative my-4 flex items-center justify-center h-[400px] md:h-[500px]"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="-z-0 absolute -top-4 right-0 flex items-center justify-center bg-black w-16 h-20 rounded-l-md">
                        <motion.div
                          className="z-10 bg-[#F96141] w-14 h-14 absolute top-4 right-0 flex items-center justify-center rounded-md"
                          onClick={handleRestartClick}
                          role="button"
                          aria-label="Restart carousel"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Icon
                            name="ArrowSync"
                            width={20}
                            height={20}
                            fill="white"
                          />
                        </motion.div>
                      </div>
                      <motion.img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-3xl shadow-md"
                        loading="lazy"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4))",
                        }}
                      ></div>
                      <div
                        className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex items-center justify-center w-48 h-20 bg-black rounded-t-xl"
                      ></div>
                    </motion.div>
                  ))}
                </Slider>
              </div>
            </div>

            <div className="w-full sm:w-1/2">
              <div
                className="slider-container h-[400px] md:h-[500px]"
                aria-label="Featured event images"
              >
                <Slider {...SLIDER_SETTINGS} {...sliderCallbacks}>
                  {SLIDER_IMAGES.map((image) => (
                    <motion.div
                      key={image.id}
                      className="my-4 relative group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: image.id * 0.1 }}
                    >
                      <Link
                        to={`/events`}
                        className="block"
                        aria-label={`View details for ${image.title}`}
                      >
                        <motion.img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-[140px] object-cover rounded-3xl shadow-sm"
                          loading="lazy"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{
                            background:
                              "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4))",
                          }}
                        >
                          <h6 className="relative flex items-center justify-center text-xs sm:text-sm font-normal text-textGray mb-2 text-center">
                            <span className="mr-1 border-b">{image.title}</span>
                            <span
                              className="w-2 h-2 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                              style={{ backgroundColor: "#F96141" }}
                            ></span>
                          </h6>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="relative block xs:block sm:block md:hidden lg:hidden xl:hidden">
        <Marquee
          pauseOnHover
          gradient={false}
          speed={50}
          className="py-3 border-y border-textGray/10 bg-black"
          aria-label="Featured artists marquee"
        >
          {marqueeItems}
        </Marquee>

        <section
          className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-4 py-6 h-auto min-h-[360px]"
          aria-labelledby="hero-title"
        >
          <div className="w-full space-y-5 text-center">
            <motion.h1
              id="hero-title"
              className="text-xl xs:text-2xl sm:text-3xl font-medium text-textGray secondary-font max-w-[90%] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Great Events Start with Great Music
            </motion.h1>
            <motion.p
              className="text-xs sm:text-sm text-textGray max-w-[80%] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Discover top musicians, book effortlessly, and make your event
              unforgettable.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 120 }}
            >
              <Button
                name="Book Now"
                className="text-textGray text-sm font-normal bg-black px-6 py-3 rounded-md transition-colors duration-300"
                onClick={handleBookNowClick}
                dotColor="bg-textOrange"
                gradient="bg-gradient-to-b from-[#F96141] via-[#662451] to-[#4D147E]"
                aria-label="Book a musician now"
              />
            </motion.div>
          </div>

          <div className="w-full mt-6 flex flex-col space-y-6">
            <div className="w-full">
              <div
                className="slider-container h-[200px] xs:h-[240px] sm:h-[280px]"
                aria-label="Main event images"
              >
                <Slider {...CAROUSEL_SETTINGS} ref={sliderRef}>
                  {SLIDER_IMAGES.map((image) => (
                    <motion.div
                      key={image.id}
                      className="relative my-2 px-2 flex items-center justify-center h-[200px] xs:h-[240px] sm:h-[280px]"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Link
                        to={`/events`}
                        className="block w-full h-full"
                        aria-label={`View details for ${image.title}`}
                      >
                        <motion.img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover rounded-2xl shadow-md"
                          loading="lazy"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4 }}
                        />
                        <div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{
                            background:
                              "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4))",
                          }}
                        ></div>
                      </Link>
                    </motion.div>
                  ))}
                </Slider>
              </div>
            </div>

            <div className="w-full">
              <div
                className="slider-container h-[140px] xs:h-[160px] sm:h-[180px]"
                aria-label="Featured event images"
              >
                <Slider {...SLIDER_SETTINGS} {...sliderCallbacks}>
                  {SLIDER_IMAGES.map((image) => (
                    <motion.div
                      key={image.id}
                      className="relative my-2 group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: image.id * 0.08 }}
                    >
                      <Link
                        to={`/events`}
                        className="block"
                        aria-label={`View details for ${image.title}`}
                      >
                        <motion.img
                          src={image.src}
                          alt={image.alt}
                          className="w-full px-2 h-[80px] xs:h-[90px] sm:h-[100px] object-cover rounded-2xl shadow-sm"
                          loading="lazy"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{
                            background:
                              "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4))",
                          }}
                        >
                          <h6 className="relative flex items-center justify-center text-xs sm:text-sm font-normal text-textGray mb-2 text-center">
                            <span className="mr-1">{image.title}</span>
                            <span
                              className="w-2 h-2 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                              style={{ backgroundColor: "#F96141" }}
                            ></span>
                          </h6>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </div>

      <BookNowModal isOpen={isModalOpen} onClose={handleModalClose} />
    </>
  );
};

Hero.propTypes = {
  homeData: PropTypes.shape({
    marquee: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        image: PropTypes.string.isRequired,
        alt: PropTypes.string,
        position: PropTypes.string.isRequired,
      })
    ),
  }),
};

Hero.defaultProps = {
  homeData,
};

export default Hero;
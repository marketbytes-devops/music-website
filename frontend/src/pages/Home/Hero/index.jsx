import Marquee from "react-fast-marquee";
import homeData from "../../../assets/data/homeData";
import Button from "../../../components/Button";
import heroSliderImg from "../../../assets/images/hero-slider-1.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import { useCallback, useMemo } from "react";
import Icon from "../../../components/Icons";

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
        dots: true,
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
];

const Hero = ({ homeData: propHomeData = homeData }) => {
  const marqueeItems = useMemo(() => {
    if (!propHomeData?.marquee?.length) {
      return (
        <p className="text-sm text-textGray" role="status">
          No featured artists available.
        </p>
      );
    }

    return propHomeData.marquee.map((item) => (
      <div
        key={item.id}
        className="mx-4 sm:mx-6 lg:mx-8 xl:mx-10 flex items-center space-x-4 text-textGray"
        role="group"
        aria-label={`Artist ${item.position}`}
      >
        <img
          src={item.image}
          alt={item.alt || `Image for ${item.position}`}
          className="w-12 h-12 object-cover rounded-full transition-transform duration-300 hover:scale-105"
          loading="lazy"
          width="48"
          height="48"
        />
        <p className="text-sm font-medium">{item.position}</p>
      </div>
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
    alert("Book Now clicked!");
  }, []);

  return (
    <>
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
            <h1
              id="hero-title"
              className="max-w-md text-3xl sm:text-4xl md:text-5xl font-medium text-textGray secondary-font transition-opacity duration-500"
            >
              Great Events Start with Great Music
            </h1>
            <p className="text-sm sm:text-base text-textGray max-w-sm primary-font">
              Discover top musicians, book effortlessly, and make your event
              unforgettable.
            </p>
            <Button
              name="Book Now"
              className="text-textGray text-sm font-normal bg-black px-6 py-3 transition-colors duration-300"
              onClick={() => alert("Book Now clicked!")}
              dotColor="bg-textOrange"
              gradient="bg-gradient-to-b from-[#F96141] via-[#662451] to-[#4D147E]"
              aria-label="Book a musician now"
            />
          </div>

          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mt-6 md:mt-14">
            <div className="w-full sm:w-1/2">
              <div
                className="slider-container h-[400px] md:h-[500px]"
                aria-label="Main event images"
              >
                <Slider {...CAROUSEL_SETTINGS}>
                  {SLIDER_IMAGES.map((image) => (
                    <div key={image.id} className="relative my-4 flex items-center justify-center h-[400px] md:h-[500px]">
                      <div className="-z-0 absolute -top-4 right-0 flex items-center justify-center bg-black w-16 h-20 rounded-l-md">
                        <div className="z-10 bg-[#F96141] w-14 h-14 absolute top-4 right-0 flex items-center justify-center rounded-md">
                          <Icon name="ArrowSync" width={20} height={20} fill="white" />
                        </div>
                      </div>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-3xl shadow-md"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center" style={{
                        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4))",
                      }}></div>
                    </div>
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
                    <div key={image.id} className="my-4 relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[140px] object-cover rounded-3xl shadow-sm"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center" style={{
                        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4))",
                      }}>
                        <h6 className="text-xs sm:text-sm font-normal text-textGray mb-2 text-center">
                          {image.title}
                        </h6>
                      </div>
                    </div>
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
          speed={60}
          className="py-2 border-y border-textGray/10 bg-black"
          aria-label="Featured artists marquee"
        >
          {marqueeItems}
        </Marquee>

        <section
          className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-4 py-6 sm:py-8 h-auto min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"
          aria-labelledby="hero-title"
        >
          <div className="w-full space-y-4 sm:space-y-6 text-center">
            <h1
              id="hero-title"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-textGray secondary-font transition-opacity duration-500 max-w-full sm:max-w-md mx-auto"
            >
              Great Events Start with Great Music
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-textGray max-w-xs sm:max-w-sm mx-auto">
              Discover top musicians, book effortlessly, and make your event
              unforgettable.
            </p>
            <Button
              name="Book Now"
              className="text-textGray text-xs sm:text-sm font-normal bg-black px-4 sm:px-6 py-2 rounded-md transition-colors duration-300"
              onClick={handleBookNowClick}
              dotColor="bg-textOrange"
              gradient="bg-gradient-to-b from-[#F96141] via-[#662451] to-[#4D147E]"
              aria-label="Book a musician now"
            />
          </div>

          <div className="w-full mt-6 sm:mt-8 flex flex-col space-y-6 sm:space-y-8">
            <div className="w-full">
              <div
                className="slider-container h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
                aria-label="Main event images"
              >
                <Slider {...CAROUSEL_SETTINGS}>
                  {SLIDER_IMAGES.map((image) => (
                    <div
                      key={image.id}
                      className="relative my-2 sm:my-4 flex items-center justify-center h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-2xl sm:rounded-3xl shadow-md"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center" style={{
                        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4))",
                      }}></div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            <div className="w-full">
              <div
                className="slider-container h-[150px] sm:h-[200px] md:h-[400px] lg:h-[500px]"
                aria-label="Featured event images"
              >
                <Slider {...SLIDER_SETTINGS} {...sliderCallbacks}>
                  {SLIDER_IMAGES.map((image) => (
                    <div key={image.id} className="relative my-2 sm:my-4">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[100px] sm:h-[120px] md:h-[140px] object-cover rounded-2xl sm:rounded-3xl shadow-sm"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center" style={{
                        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4))",
                      }}>
                        <h6 className="text-xs sm:text-sm font-normal text-textGray mb-2 text-center">
                          {image.title}
                        </h6>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </div>
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
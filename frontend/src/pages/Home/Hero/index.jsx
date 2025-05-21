import Marquee from "react-fast-marquee";
import homeData from "../../../assets/data/homeData";
import Button from "../../../components/Button";
import heroSliderImg from "../../../assets/images/hero-slider-1.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

const Hero = () => {
  const carouselSettings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    waitForAnimate: false,
    adaptiveHeight: true,
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    verticalSwiping: true,
    arrows: false,
    beforeChange: (currentSlide, nextSlide) =>
      console.log("before change", currentSlide, nextSlide),
    afterChange: (currentSlide) => console.log("after change", currentSlide),
  };

  const sliderImages = [
    { id: 1, src: heroSliderImg, alt: "Event music performance 1" },
    { id: 2, src: heroSliderImg, alt: "Event music performance 2" },
    { id: 3, src: heroSliderImg, alt: "Event music performance 3" },
    { id: 4, src: heroSliderImg, alt: "Event music performance 4" },
  ];

  return (
    <div className="relative">
      <Marquee
        pauseOnHover
        gradient={false}
        speed={80}
        className="py-2 border-y border-textGray/10 bg-black"
        aria-label="Featured artists marquee"
      >
        {homeData?.marquee?.length > 0 ? (
          homeData.marquee.map((item) => (
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
              />
              <p className="text-sm font-medium">{item.position}</p>
            </div>
          ))
        ) : (
          <p className="text-sm text-textGray">No featured artists available.</p>
        )}
      </Marquee>

      <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center min-h-[400px] md:min-h-[500px] px-4 py-8">

        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="max-w-md text-3xl sm:text-4xl md:text-5xl font-medium text-textGray secondary-font transition-opacity duration-500">
            Great Events Start with Great Music
          </h1>
          <p className="text-sm sm:text-base text-textGray max-w-sm">
            Discover top musicians, book effortlessly, and make your event
            unforgettable.
          </p>
          <Button
            name="Book Now"
            className="text-textGray text-sm font-normal bg-black px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
            onClick={() => alert("Book Now clicked!")}
            dotColor="bg-textOrange"
            gradient="bg-gradient-to-b from-[#F96141] via-[#662451] to-[#4D147E]"
            aria-label="Book a musician now"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mt-6 md:mt-0">

          <div className="w-full sm:w-1/2">
            <div className="slider-container" aria-label="Main event images">
              <Slider {...carouselSettings}>
                {sliderImages.map((image) => (
                  <div key={image.id}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[250px] sm:h-[300px] object-cover rounded-lg shadow-md"
                      loading="lazy"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="w-full sm:w-1/2">
            <div className="slider-container" aria-label="Featured event images">
              <Slider {...sliderSettings}>
                {sliderImages.map((image) => (
                  <div key={image.id}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[100px] sm:h-[120px] object-cover rounded-lg shadow-sm"
                      loading="lazy"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Hero.propTypes = {
  homeData: PropTypes.shape({
    marquee: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        image: PropTypes.string,
        alt: PropTypes.string,
        position: PropTypes.string,
      })
    ),
  }),
};

export default Hero;
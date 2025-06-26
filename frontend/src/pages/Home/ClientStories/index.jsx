import Card from "../../../components/Card";
import eventImage from "../../../assets/images/marquee-1.webp";
import personImage from "../../../assets/images/person.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";

const stories = [
  {
    image: personImage,
    alt: "Client Stories",
    title: "Wedding events reviews",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: "19-Feb-2025",
  },
  {
    image: personImage,
    alt: "Client Stories",
    title: "Wedding events reviews",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: "20-Feb-2025",
  },
  {
    image: personImage,
    alt: "Client Stories",
    title: "Wedding events reviews",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: "21-Feb-2025",
  },
  {
    image: personImage,
    alt: "Client Stories",
    title: "Wedding events reviews",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: "22-Feb-2025",
  },
  {
    image: personImage,
    alt: "Client Stories",
    title: "Wedding events reviews",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: "19-Feb-2025",
  },
  {
    image: personImage,
    alt: "Client Stories",
    title: "Wedding events reviews",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: "20-Feb-2025",
  },
  {
    image: personImage,
    alt: "Client Stories",
    title: "Wedding events reviews",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: "21-Feb-2025",
  },
  {
    image: personImage,
    alt: "Client Stories",
    title: "Wedding events reviews",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: "22-Feb-2025",
  },
  {
    image: personImage,
    alt: "Client Stories",
    title: "Wedding events reviews",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: "21-Feb-2025",
  },
  {
    image: personImage,
    alt: "Client Stories",
    title: "Wedding events reviews",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: "22-Feb-2025",
  },
];

const groupStoriesIntoPairs = (stories) => {
  const pairedStories = [];
  for (let i = 0; i < stories.length; i += 2) {
    pairedStories.push(stories.slice(i, i + 2));
  }
  return pairedStories;
};

const ActiveDotSvg = ({ isSmall }) => (
  <svg
    width={isSmall ? "16" : "20"}
    height={isSmall ? "16" : "20"}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.4" y="0.4" width="19.2" height="19.2" rx="9.6" fill="black" />
    <rect
      x="0.4"
      y="0.4"
      width="19.2"
      height="19.2"
      rx="9.6"
      stroke="url(#paint0_linear_1_28379)"
      strokeWidth="0.8"
    />
    <circle cx="10" cy="10" r="3" fill="#F96141" />
    <defs>
      <linearGradient
        id="paint0_linear_1_28379"
        x1="10"
        y1="0"
        x2="10"
        y2="20"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4D147E" />
        <stop offset="1" stopColor="#F96141" />
      </linearGradient>
    </defs>
  </svg>
);

const NonActiveDotSvg = ({ isSmall }) => (
  <svg
    width={isSmall ? "16" : "20"}
    height={isSmall ? "16" : "20"}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.4" y="0.4" width="19.2" height="19.2" rx="9.6" fill="black" />
    <rect
      x="0.4"
      y="0.4"
      width="19.2"
      height="19.2"
      rx="9.6"
      stroke="#383737"
      strokeWidth="0.8"
    />
    <circle cx="10" cy="10" r="3" fill="#383737" />
  </svg>
);

const ClientStories = () => {
  const pairedStories = groupStoriesIntoPairs(stories);
  const slideCount = pairedStories.length;
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (index) => setCurrentSlide(index),
    customPaging: (i) => {
      return (
        <div className="w-[20px] h-[20px] sm:w-5 sm:h-5 flex items-center justify-center relative top-6 sm:top-10">
          {i === currentSlide ? (
            <ActiveDotSvg isSmall={!window.matchMedia('(min-width: 640px)').matches} />
          ) : (
            <NonActiveDotSvg isSmall={!window.matchMedia('(min-width: 640px)').matches} />
          )}
        </div>
      );
    },
    dotsClass: "slick-dots flex items-center justify-center space-x-1 sm:space-x-2",
  };

  return (
    <div className="grid items-center justify-center gap-y-6 sm:gap-y-10 lg:gap-y-20 gap-x-4 sm:gap-x-8 max-w-7xl mx-auto grid-cols-1 lg:grid-cols-[74%_23%]">
      <div className="space-y-4 sm:space-y-6 lg:space-y-8 bg-white/5 rounded-2xl sm:rounded-3xl px-4 sm:px-6 lg:px-10 pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-24">
        <Slider {...settings} ref={sliderRef}>
          {pairedStories.map((pair, index) => (
            <div key={index} className="w-full px-1 sm:px-2">
              <div className="flex flex-col space-y-3 sm:space-y-4">
                {pair.map((story, storyIndex) => (
                  <div
                    key={storyIndex}
                    className="flex items-center space-x-3 sm:space-x-4 border border-b border-t-0 border-l-0 border-r-0 p-3 sm:p-4"
                  >
                    <img
                      src={story.image}
                      alt={story.alt}
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-cover rounded-full flex-shrink-0"
                    />
                    <div className="flex flex-col w-full space-y-1 sm:space-y-2">
                      <p className="text-[10px] sm:text-xs lg:text-xs text-textGray primary-font">
                        {story.title}
                      </p>
                      <p className="text-[10px] sm:text-xs lg:text-xs text-textGray primary-font">
                        {story.description}
                      </p>
                      <div className="flex justify-end">
                        <p className="text-[10px] sm:text-xs lg:text-xs text-textGray primary-font">
                          {story.date}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full px-4 sm:px-0">
        <Card eventImage={eventImage} />
      </div>
    </div>
  );
};

export default ClientStories;
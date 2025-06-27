import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import Button from '../../../components/Button';
import StarTitle from '../../../components/StarTitle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Active Dot SVG Component
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

// Non-Active Dot SVG Component
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

const PerfectMusic = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [expandedCardId, setExpandedCardId] = useState(1);
  const [backgroundColor, setBackgroundColor] = useState('bg-textPurple/10');
  const [currentSlide, setCurrentSlide] = useState(0);

  const musicEvents = [
    {
      id: 1,
      title: 'Jazz Night',
      initialImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      expandedImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      bgColor: 'bg-textPurple/10',
    },
    {
      id: 2,
      title: 'Rock Festival',
      initialImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      expandedImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      bgColor: 'bg-[#263e3b]',
    },
    {
      id: 3,
      title: 'Classical Concert',
      initialImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      expandedImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      bgColor: 'bg-[#7d527a]',
    },
    {
      id: 4,
      title: 'Electronic Dance',
      initialImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      expandedImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      bgColor: 'bg-[#591f21]',
    },
  ];

  const handleCardClick = (id) => {
    const newExpandedId = expandedCardId === id ? null : id;
    setExpandedCardId(newExpandedId);
    const selectedEvent = musicEvents.find((event) => event.id === newExpandedId);
    setBackgroundColor(selectedEvent ? selectedEvent.bgColor : 'bg-textPurple/10');
  };

  const cardVariants = {
    initial: {
      width: '80vw',
      height: '40vh', 
      scale: 1,
      opacity: 0.9,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 1,
      },
    },
    expanded: {
      width: '90vw', 
      height: '50vh',
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 1,
        duration: 0.3,
      },
    },
    tabletInitial: {
      width: '45vw', 
      height: '45vh',
      scale: 1,
      opacity: 0.9,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 1,
      },
    },
    tabletExpanded: {
      width: '70vw',
      height: '50vh',
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 1,
        duration: 0.3,
      },
    },
    desktopInitial: {
      width: 150,
      height: 400,
      scale: 1,
      opacity: 0.9,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 1,
      },
    },
    desktopExpanded: {
      width: 600,
      height: 400,
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 1,
        duration: 0.3,
      },
    },
  };

  const imageVariants = {
    initial: { scale: 1, opacity: 0.8 },
    expanded: { scale: 1.1, opacity: 1 },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.3 },
    },
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    afterChange: (index) => {
      setCurrentSlide(index);
      const newExpandedId = musicEvents[index].id;
      setExpandedCardId(newExpandedId);
      setBackgroundColor(musicEvents[index].bgColor);
    },
    customPaging: (i) => ( 
      <button className="w-[16px] h-[16px] flex items-center justify-center relative bottom-8">
        {currentSlide === i ? <ActiveDotSvg isSmall={true} /> : <NonActiveDotSvg isSmall={true} />}
      </button>
    ),
    appendDots: (dots) => (
      <div className="hidden md:block mt-4">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
  };

  return (
    <motion.section
      className="py-4 sm:py-8 md:py-16 px-2 sm:px-4 md:px-0"
      style={{ backgroundColor: 'black' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`w-full max-w-7xl mx-auto p-4 sm:p-8 md:p-14 rounded-3xl overflow-hidden ${backgroundColor}`}>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-8 md:mb-8 gap-4">
          <div className="text-left">
            <StarTitle
              title="Find your perfect music event"
              className="my-4 sm:my-6 md:my-8"
              isParentHovered={isHovered}
            />
          </div>
          <Button
            name="View All Events"
            className="w-fit text-xs sm:text-sm font-normal bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 md:px-6 md:py-2"
            onClick={() => alert('View All Events clicked!')}
            dotColor="bg-textOrange"
            gradient="bg-gradient-to-b from-[#F96141] via-[#662451] to-[#4D147E]"
          />
        </div>

        {/* Mobile Slider */}
        <div className="block sm:hidden">
          <Slider {...sliderSettings}>
            {musicEvents.map((event) => (
              <div key={event.id} className="flex flex-col items-center snap-center px-2">
                <motion.div
                  className="relative flex-shrink-0 rounded-3xl overflow-hidden cursor-pointer"
                  style={{ height: '40vh' }} 
                >
                  <motion.img
                    src={expandedCardId === event.id ? event.expandedImage : event.initialImage}
                    alt={event.title}
                    className="w-full h-full object-cover rounded-3xl border border-0.5 border-[#262626]"
                    variants={imageVariants}
                    initial="initial"
                    animate={expandedCardId === event.id ? 'expanded' : 'initial'}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <AnimatePresence>
                  {expandedCardId === event.id && (
                    <motion.h3
                      className="text-white text-sm font-medium mt-6 text-center primary-font"
                      variants={titleVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      {event.title}
                    </motion.h3>
                  )}
                </AnimatePresence>
                <div className="pb-10">

                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop/Tablet Scrollable Cards */}
        <div className="hidden sm:flex gap-2 sm:gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {musicEvents.map((event) => (
            <div key={event.id} className="flex flex-col items-start snap-center">
              <motion.div
                className="relative flex-shrink-0 rounded-3xl overflow-hidden cursor-pointer"
                variants={{
                  initial: window.innerWidth < 1024 ? cardVariants.tabletInitial : cardVariants.desktopInitial,
                  expanded: window.innerWidth < 1024 ? cardVariants.tabletExpanded : cardVariants.desktopExpanded,
                }}
                initial="initial"
                animate={expandedCardId === event.id ? 'expanded' : 'initial'}
                onClick={() => handleCardClick(event.id)}
              >
                <motion.img
                  src={expandedCardId === event.id ? event.expandedImage : event.initialImage}
                  alt={event.title}
                  className="w-full h-full object-cover rounded-3xl border border-0.5 border-[#262626]"
                  variants={imageVariants}
                  initial="initial"
                  animate={expandedCardId === event.id ? 'expanded' : 'initial'}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <AnimatePresence>
                {expandedCardId === event.id && (
                  <motion.h3
                    className="text-white text-sm sm:text-base md:text-lg font-medium mt-2 sm:mt-3 md:mt-4 text-left primary-font"
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {event.title}
                  </motion.h3>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PerfectMusic;
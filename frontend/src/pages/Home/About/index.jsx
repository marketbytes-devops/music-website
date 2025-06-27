import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import videoBg1 from '../../../assets/videos/croud-dancing.mp4';
import videoBg2 from '../../../assets/videos/croud-dancing.mp4';
import videoBg3 from '../../../assets/videos/croud-dancing.mp4';
import backgroundMusic from '../../../assets/audio/velmuruka.mp3';
import Button from '../../../components/Button';
import StarTitle from '../../../components/StarTitle';
import MainTitle from '../../../components/MainTitle';

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

const About = () => {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const scrollBasedTab = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 2, 2]);

  const videoSources = [videoBg1, videoBg2, videoBg3];

  const valuesCards = [
    {
      title: 'Excellence',
      description: 'We deliver high-quality musical performances with precision and care.',
    },
    {
      title: 'Passion',
      description: 'Our performances are fueled by a deep love for music and artistry.',
    },
    {
      title: 'Reliability',
      description: 'We ensure dependable service for every event, big or small.',
    },
    {
      title: 'Community',
      description: 'We foster connections through music, bringing people together.',
    },
  ];

  const tabs = [
    {
      title: 'About',
      content: (
        <div className="max-w-7xl text-left">
          <StarTitle title="Our Story" className="my-4 md:my-10" isParentHovered={isHovered} />
          <MainTitle firstTitle="From Vision to Melody:" secondTitle="The Book Your Musician" thirdTitle="Story" />
          <p className="text-sm sm:text-base text-textGray primary-font mt-6">
            Book Your Musician Private Limited is your one-stop destination for all your musical needs. We specialize in curating unforgettable musical experiences for a variety of events, from intimate gatherings to grand celebrations. Looking to book a musical band? Check out Book Your Musician! We offer various bands to choose from, catering to all genres and event types. With just a few clicks, you can browse several options and find the perfect fit for your occasion. Whether it’s a wedding, corporate event, or private party, you’ll find the right sound to elevate your event.
          </p>
        </div>
      ),
    },
    {
      title: 'Our Mission',
      content: (
        <div className="max-w-7xl text-left">
          <StarTitle title="Our Mission" className="my-4 md:my-10" isParentHovered={isHovered} />
          <MainTitle firstTitle="Creating" secondTitle="Unforgettable Moments" thirdTitle="Through the Power of Music!" />
          <p className="text-sm sm:text-base text-textGray primary-font mt-6">
            Our mission is to bring joy, energy, and excitement to every occasion through the magic of live music. We are committed to delivering exceptional musical experiences that go beyond expectations, ensuring every event is unforgettable. By connecting clients with top-tier musicians, we create lasting memories that leave a lasting impact.
          </p>
        </div>
      ),
    },
    {
      title: 'Our Values',
      content: (
        <div className="max-w-7xl text-left">
          <StarTitle title="Our Values" className="my-4 md:my-10" isParentHovered={isHovered} />
          <MainTitle firstTitle="Our" secondTitle="Core Values" thirdTitle="- Music, Passion, and Excellence in Every Note" />
          <p className="text-sm sm:text-base text-textGray primary-font mt-6">
            Integrity, innovation, and inclusivity drive everything we do. We believe in building a culture that celebrates diversity and encourages bold ideas.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {valuesCards.map((card, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 text-left min-w-0"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-sm sm:text-base text-textGray">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && audioRef.current) {
          audioRef.current.play().catch((error) => {
            console.log('Autoplay prevented:', error);
          });
        } else if (audioRef.current) {
          audioRef.current.pause();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const unsubscribe = scrollBasedTab.onChange((value) => {
      setActiveTabIndex(Math.round(value));
    });
    return () => unsubscribe();
  }, [scrollBasedTab]);

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      setIsScrolling(true);
      document.body.classList.add('scrollbar-none');
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        document.body.classList.remove('scrollbar-none');
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      document.body.classList.remove('scrollbar-none');
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videoSources[activeTabIndex];
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [activeTabIndex]);

  return (
    <div ref={ref} className="relative w-full h-[300vh] bg-black">
      <style>
        {`
          .scrollbar-none::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-none {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
      <div className="sticky top-0 w-full h-auto md:h-screen py-8 md:py-32 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSources[activeTabIndex]} type="video/mp4" />
        </video>
        <audio ref={audioRef} loop muted>
          <source src={backgroundMusic} type="audio/mpeg" />
        </audio>
        <div className="absolute top-0 left-0 w-full h-full three-circle-morphing-gradient opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-start h-full text-white px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              {tabs.map((tab, index) => (
                <Button
                  key={tab.title}
                  name={tab.title}
                  onClick={() => setActiveTabIndex(index)}
                  className={`w-full md:w-40 px-4 py-2 text-sm sm:text-base ${activeTabIndex === index ? 'bg-white text-textBlack' : 'border border-white bg-white/5 text-white'}`}
                  dotColor={activeTabIndex === index ? 'bg-textOrange' : 'bg-transparent'}
                  gradient={
                    activeTabIndex === index
                      ? 'bg-gradient-to-b from-[#F96141] via-[#662451] to-[#4D147E]'
                      : 'bg-transparent'
                  }
                />
              ))}
            </div>
            <div
              className="w-full relative mt-8"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {tabs.map((tab, index) => (
                <motion.div
                  key={tab.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: activeTabIndex === index ? 1 : 0,
                    x: activeTabIndex === index ? 0 : -20,
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className={`w-full ${activeTabIndex === index ? 'block' : 'hidden'}`}
                >
                  {tab.content}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-1 sm:space-x-2 mt-4">
          {tabs.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTabIndex(index)}
              className="w-[20px] h-[20px] sm:w-5 sm:h-5 flex items-center justify-center"
            >
              {activeTabIndex === index ? (
                <ActiveDotSvg isSmall={!window.matchMedia('(min-width: 640px)').matches} />
              ) : (
                <NonActiveDotSvg isSmall={!window.matchMedia('(min-width: 640px)').matches} />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
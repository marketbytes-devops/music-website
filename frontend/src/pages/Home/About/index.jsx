import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import videoBg1 from '../../../assets/videos/croud-dancing.mp4'; 
import videoBg2 from '../../../assets/videos/croud-dancing.mp4'; 
import videoBg3 from '../../../assets/videos/croud-dancing.mp4'; 
import Button from '../../../components/Button';
import StarTitle from '../../../components/StarTitle';
import MainTitle from '../../../components/MainTitle';

const About = () => {
  const ref = useRef(null);
  const videoRef = useRef(null); 
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
      description: 'We deliver high-quality musical performances with precision and care.',
    },
    {
      title: 'Reliability',
      description: 'We deliver high-quality musical performances with precision and care.',
    },
    {
      title: 'Community',
      description: 'We deliver high-quality musical performances with precision and care.',
    },
  ];

  const tabs = [
    {
      title: 'About',
      content: (
        <div className="max-w-7xl text-left">
          <StarTitle title="Our Story" className="my-10" isParentHovered={isHovered} />
          <MainTitle firstTitle="From Vision to Melody:" secondTitle="The Book Your Musician" thirdTitle="Story" />
          <p className="text-sm sm:text-base text-textGray max-w-2xl primary-font mt-6">
            Book Your Musician Private Limited is your one-stop destination for all your musical needs. We specialize in curating unforgettable musical experiences for a variety of events, from intimate gatherings to grand celebrations. Looking to book a musical band? Check out Book Your Musician! We offer various bands to choose from, catering to all genres and event types. With just a few clicks, you can browse several options and find the perfect fit for your occasion. Whether it’s a wedding, corporate event, or private party, you’ll find the right sound to elevate your event.
          </p>
        </div>
      ),
    },
    {
      title: 'Our Mission',
      content: (
        <div className="max-w-7xl text-left">
          <StarTitle title="Our Mission" className="my-10" isParentHovered={isHovered} />
          <MainTitle firstTitle="Creating" secondTitle="Unforgettable Moments" thirdTitle="Through the Power of Music!" />
          <p className="text-sm sm:text-base text-textGray max-w-2xl primary-font mt-6">
            Our mission is to bring joy, energy, and excitement to every occasion through the magic of live music. We are committed to delivering exceptional musical experiences that go beyond expectations, ensuring every event is unforgettable. By connecting clients with top-tier musicians, we create lasting memories that leave a lasting impact.
          </p>
        </div>
      ),
    },
    {
      title: 'Our Values',
      content: (
        <div className="max-w-7xl text-left">
          <StarTitle title="Our Values" className="my-10" isParentHovered={isHovered} />
          <MainTitle firstTitle="Our" secondTitle="Core Values" thirdTitle="- Music, Passion, and Excellence in Every Note" />
          <p className="text-sm sm:text-base text-textGray max-w-2xl primary-font mt-6">
            Integrity, innovation, and inclusivity drive everything we do. We believe in building a culture that celebrates diversity and encourages bold ideas.
          </p>
        </div>
      ),
    },
  ];

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
      <div className="sticky top-0 w-full h-auto md:h-screen py-8 overflow-hidden flex items-start justify-start">
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
        <div className="absolute top-0 left-0 w-full h-full three-circle-morphing-gradient opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-start justify-center h-full text-white px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-start">
              {tabs.map((tab, index) => (
                <Button
                  key={tab.title}
                  name={tab.title}
                  onClick={() => setActiveTabIndex(index)}
                  className={`w-full sm:w-40 px-4 py-2 text-sm sm:text-base ${
                    activeTabIndex === index ? 'bg-white text-textBlack' : 'border border-white bg-white/5 text-white'
                  }`}
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
              className="w-full h-auto relative"
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
              {activeTabIndex === 2 && (
                <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                  {valuesCards.map((card, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 text-left"
                    >
                      <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                      <p className="text-sm sm:text-base text-textGray">{card.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
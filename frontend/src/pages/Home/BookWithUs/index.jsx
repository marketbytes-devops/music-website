import { useState, useEffect } from "react";
import { motion, useAnimation, useScroll } from "framer-motion";
import Button from "../../../components/Button";
import StarTitle from "../../../components/StarTitle";

const BookWithUs = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = scrollY.get();
      const windowHeight = window.innerHeight;
      const sectionOffset = document.querySelector("#book-with-us")?.offsetTop || 0;

      if (scrollPosition > sectionOffset - windowHeight + 200) {
        setIsInView(true);
        controls.start("visible");
      } else {
        setIsInView(false);
        controls.start("hidden");
      }
    };

    const unsubscribe = scrollY.onChange(handleScroll);
    return () => unsubscribe();
  }, [controls, scrollY]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const spotlightVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      id="book-with-us"
      className="min-h-auto bg-black flex items-center justify-center"
    >
      <motion.div
        className="relative w-full max-w-7xl h-full md:h-screen mx-auto px-4 py-8 md:px-14 rounded-3xl border border-[#ffffff33] overflow-hidden flex items-center"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* Spotlight Effect */}
        <motion.div
          className="absolute -top-56 left-[35%] transform -translate-x-1/2 w-[400px] h-[400px] rounded-full pointer-events-none z-10"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.4) 10%, rgba(255, 255, 255, 0.2) 30%, rgba(255, 255, 255, 0.1) 50%, rgba(0, 0, 0, 0) 70%)",
          }}
          variants={spotlightVariants}
          animate={isInView ? "visible" : "hidden"}
        />

        <div className="relative z-20 w-full flex flex-col justify-center space-y-8">
          <div className="text-left space-y-8">
            <StarTitle
              title="Why Book with Us?"
              isParentHovered={isInView}
              className="text-left text-white"
            />
            <p className="text-sm sm:text-base text-[#B0B0B0] font-primary text-left">
              Our commitment to delivering exceptional, tailored musical experiences sets us apart. With a team of talented and reliable musicians who are passionate about their craft, we provide professional performances across a wide range of genres—from classical and jazz to pop and rock—ensuring that every event is matched perfectly to our clients unique vision. Our seamless planning process emphasizes meticulous attention to detail, allowing you to enjoy a hassle-free experience from start to finish. At Book Your Musician, we are dedicated to creating music that leaves lasting memories and resonates long after the final note.
            </p>
            <div className="text-left">
              <Button
                name="Book now"
                className="w-fit text-sm font-normal bg-black text-white px-6 py-3 rounded-full"
                onClick={() => alert("Book now clicked!")}
                dotColor="bg-[#F96141]"
                gradient="bg-gradient-to-b from-[#F96141] via-[#662451] to-[#4D147E]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BookWithUs;
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServiceCard = ({ serviceImage, serviceTitle, serviceDescription }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group hover:border-[#F96141] hover:border border-0 rounded-3xl overflow-hidden hover:shadow-lg hover:shadow-[#F96141] relative"
      style={{
        backgroundImage: `url(${serviceImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "380px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-opacity duration-300"></div>

      <div className="relative flex flex-col items-start justify-end w-full h-full p-6">
        <AnimatePresence>
          {!isHovered && (
            <motion.div
              key="initial-title"
              className="w-auto absolute top-1/2 transform -translate-y-1/2 left-6 pb-1"
              style={{
                borderBottom: "2px solid #FFFFFF",
              }}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            >
              <div className="flex justify-center">
                <h2 className="text-white text-3xl font-bold">{serviceTitle}</h2>
              </div>
              <span
                className="absolute bottom-0 left-0 w-2 h-2 rounded-full translate-y-1"
                style={{ backgroundColor: "#F96141" }}
              ></span>
              <span
                className="absolute bottom-0 right-0 w-2 h-2 rounded-full translate-y-1"
                style={{ backgroundColor: "#F96141" }}
              ></span>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              key="hover-content"
              className="flex flex-col items-start justify-end w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, y: 50, transition: { duration: 0.3 } }}
            >
              <h2 className="text-white text-2xl font-bold mb-4">{serviceTitle}</h2>
              <p className="text-white text-sm font-thin">{serviceDescription}</p>
              <button className="mt-4 text-textOrange text-sm font-medium flex items-center">
                Book Now
                <span className="w-2 h-2 bg-textOrange rounded-full ml-2" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServiceCard;
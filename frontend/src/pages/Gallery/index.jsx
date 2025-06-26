import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StarTitle from "../../components/StarTitle";

const Gallery = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const images = [
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3",
  ];

  const videos = [
    "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4",
  ];

  const getDisplayedMedia = () => {
    switch (selectedTab.label) {
      case "All":
        return [...images.map(url => ({ type: "image", url })), ...videos.map(url => ({ type: "video", url }))];
      case "Images":
        return images.map(url => ({ type: "image", url }));
      case "Videos":
        return videos.map(url => ({ type: "video", url }));
      default:
        return [];
    }
  };

  return (
    <div className="bg-[#0D000F]">
      <header
        className="flex items-center justify-center pt-8 sm:pt-8 md:pt-16"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <StarTitle
          title="GALLERY"
          className="text-lg xs:text-lg sm:text-xl md:text-xl lg:text-xl"
          isParentHovered={isHovered}
        />
      </header>
      <section className="flex justify-center pt-8 sm:pt-8 md:pt-16">
        <nav className="w-full max-w-md px-4 md:px-0">
          <ul className="flex list-none p-0 m-0 font-medium text-sm">
            {tabs.map((item) => (
              <motion.li
                key={item.label}
                initial={false}
                animate={{
                  backgroundColor: item === selectedTab ? "#F96141" : "transparent",
                  color: item === selectedTab ? "#ffffff" : "#ffffff",
                }}
                className="flex-1 h-10 flex items-center justify-center rounded cursor-pointer relative"
                onClick={() => setSelectedTab(item)}
              >
                {item.label}
              </motion.li>
            ))}
          </ul>
        </nav>
      </section>
      <section className="flex justify-center items-center flex-1 pt-10 sm:pt-10 md:pt-20 pb-8 sm:pb-8 md:pb-16 px-4 md:px-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab.label}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-7xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {getDisplayedMedia().length > 0 ? (
                getDisplayedMedia().map((media, index) => (
                  <motion.div
                    key={`${media.type}-${index}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative"
                  >
                    {media.type === "image" ? (
                      <img
                        src={media.url}
                        alt={`Gallery item ${index + 1}`}
                        className="w-full h-56 object-cover"
                      />
                    ) : (
                      <video
                        src={media.url}
                        controls
                        className="w-full h-56 object-cover"
                      />
                    )}
                  </motion.div>
                ))
              ) : (
                <div className="text-white text-center">No media available</div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
};

const tabs = [
  { label: "All" },
  { label: "Images" },
  { label: "Videos" },
];

export default Gallery;
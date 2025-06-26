import { useState } from "react";
import StarTitle from "../../components/StarTitle";

const Gallery = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="bg-[#0D000F]">
        <header className="flex items-center justify-center pt-16"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <StarTitle
            title="GALLERY"
            className="text-lg xs:text-lg sm:text-xl md:text-xl lg:text-xl"
            isParentHovered={isHovered}
          />
        </header>
        <section className="tab">
          
        </section>
      </div>
    </>
  );
};

export default Gallery;
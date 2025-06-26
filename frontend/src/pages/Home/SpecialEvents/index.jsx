import Card from "../../../components/Card";
import StarTitle from "../../../components/StarTitle";
import Button from "../../../components/Button"; 
import eventFirst from "../../../assets/images/marquee-1.webp";
import { useState } from "react";

const PlayVideo = () => {
  console.log("Play video clicked!");
};

const events = [
  {
    id: 1,
    image: eventFirst,
    handleClick: PlayVideo,
  },
  {
    id: 2,
    image: eventFirst,
    handleClick: PlayVideo,
  },
  {
    id: 3,
    image: eventFirst,
    handleClick: PlayVideo,
  },
  {
    id: 4,
    image: eventFirst,
    handleClick: PlayVideo,
  },
  {
    id: 5,
    image: eventFirst,
    handleClick: PlayVideo,
  },
  {
    id: 6,
    image: eventFirst,
    handleClick: PlayVideo,
  },
];

const SpecialEvents = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="max-w-7xl mx-auto"
    >
      <div className="text-left flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-8 md:mb-16">
        <StarTitle
          title="Special events"
          isParentHovered={isHovered}
          className="text-left text-white"
        />
        <div className="hidden md:flex text-center md:text-left">
          <Button
            name="View All"
            className="w-fit text-sm font-normal bg-black text-white px-6 py-3 rounded-full"
            onClick={() => alert("View All clicked!")}
            dotColor="bg-[#F96141]"
            gradient="bg-gradient-to-b from-[#F96141] via-[#662451] to-[#4D147E]"
          />
        </div>
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-b from-transparent via-[#662451]/10 to-[#662451]/10 animate-gradient">
          <div className="bg-gradient-to-r from-[#000000]/20 via-[#2267CC]/20 to-[#611D76]/20 rounded-3xl grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4 md:gap-20 px-4 py-8 md:py-24 md:px-28">
            {events.map((event) => (
              <div key={event.id}>
                <Card eventImage={event.image} onClick={event.handleClick} />
              </div>
            ))}
            <div className="flex md:hidden lg:hidden xl:hidden items-center justify-center text-center md:text-left">
              <Button
                name="View All"
                className="w-fit text-sm font-normal bg-black text-white px-6 py-3 rounded-full"
                onClick={() => alert("View All clicked!")}
                dotColor="bg-[#F96141]"
                gradient="bg-gradient-to-b from-[#F96141] via-[#662451] to-[#4D147E]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialEvents;
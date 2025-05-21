import { useState } from "react";
import Button from "../../../components/Button";
import privatePartyVideo from "../../../assets/Home/Book your musician/Home Page/Videos/video 1";
import weddingEventVideo from"../../../assets/Home/Book your musician/Home Page/Videos/video 2";
import djPartyVideo from "../../../assets/Home/Book your musician/Home Page/Videos/video 3";
import corporateEventsVideo from "../../../assets/Home/Book your musician/Home Page/Videos/video 4";

const PerfectMusicSession = () => {
  const [activeCard, setActiveCard] = useState(0);
  const events = [
    { title: "Private Parties", video: privatePartyVideo },
    { title: "Wedding Event", video: weddingEventVideo },
    { title: "DJ Party Event", video: djPartyVideo },
    { title: "Corporate Events", video: corporateEventsVideo },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: "rgba(12, 5, 13, 1)" }}>
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Heading and Button */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            ✨ Find your perfect music event ✨
          </h2>
          <Button
            name="View All Events"
            className="text-textGray w-fit text-sm font-normal bg-black px-6 py-2"
            onClick={() => alert("View All Events clicked!")}
            dotColor="bg-textOrange"
            gradient="bg-gradient-to-b from-[#F96141] via-[#662451] to-[#4D147E]"
          />
        </div>

        {/* Cards Layout */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Active (Larger) Card */}
          <div className="md:w-2/3">
            <div
              className="cursor-pointer rounded-xl overflow-hidden"
              onClick={() => setActiveCard(activeCard)} // Clicking the active card does nothing
            >
              <video
                src={events[activeCard].video}
                className="w-full h-[400px] object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <p className="text-white text-lg mt-4">{events[activeCard].title}</p>
          </div>

          {/* Inactive (Smaller) Cards */}
          <div className="md:w-1/3 flex flex-col gap-6">
            {events.map((event, index) => (
              index !== activeCard && (
                <div key={index}>
                  <div
                    className="cursor-pointer rounded-xl overflow-hidden"
                    onClick={() => setActiveCard(index)}
                  >
                    <video
                      src={event.video}
                      className="w-full h-[200px] object-cover"
                      controls
                      playsInline
                    />
                  </div>
                  <p className="text-white text-lg mt-4">{event.title}</p>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfectMusicSession;
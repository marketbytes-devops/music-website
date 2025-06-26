import Banner from "../../components/Banner";
import GalleryMarquee from "../../components/UiComponents/GalleryMarquee";
import EventsListing from "../EventsListing";

const Events = () => {
  const subtitles = [
    { text: "DJ Nights", gradient: ["#F01B2F", "#FE0B86"] },
    { text: "Party Events", gradient: ["#1F6ED2", "#662451"] },
    { text: "Wedding Celebrations", gradient: ["#F96141", "#FFFFFF"] },
    { text: "Private Celebrations", gradient: ["#4D147E", "#FFFFFF"] },
  ];

  return (
    <>
      <Banner
        title="EVENTS"
        subtitleFirst="We offer unforgettable experiences including"
        subtitles={subtitles}
      />
      <section className="max-w-7xl mx-auto bg-black">
        <EventsListing />
      </section>
      <section className="py-8 sm:py-8 md:py-16 bg-black -mt-6 md:-mt-10">
        <GalleryMarquee />
      </section>
    </>
  );
};

export default Events;
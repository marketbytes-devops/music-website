import Banner from "../../components/Banner";

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
    </>
  );
};

export default Events;
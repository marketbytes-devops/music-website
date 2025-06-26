import Banner from "../../components/Banner";
import ServiceCard from "../../components/UiComponents/ServiceCard";
import image1 from "../../assets/images/service-img-1.png";
import image2 from "../../assets/images/service-img-1.png"; // Update to different image if available
import image3 from "../../assets/images/service-img-1.png";
import image4 from "../../assets/images/service-img-1.png";
import image5 from "../../assets/images/service-img-1.png";
import image6 from "../../assets/images/service-img-1.png";
import ExperiencingBeat from "../../components/UiComponents/ExperiencingBeat";
import GalleryMarquee from "../../components/UiComponents/GalleryMarquee";

const Services = () => {
  const subtitles = [
    { text: "DJ Nights", gradient: ["#F01B2F", "#FE0B86"] },
    { text: "Party Services", gradient: ["#1F6ED2", "#662451"] },
    { text: "Wedding Celebrations", gradient: ["#F96141", "#FFFFFF"] },
    { text: "Private Celebrations", gradient: ["#4D147E", "#FFFFFF"] },
  ];

  const serviceData = [
    {
      id: 1,
      image: image1,
      title: "Celebrity Singers",
      description:
        "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
    },
    {
      id: 2,
      image: image2,
      title: "Live Band",
      description:
        "Experience electrifying live music with top bands, perfect for any event or celebration.",
    },
    {
      id: 3,
      image: image3,
      title: "DJ Party Nights",
      description:
        "Get the crowd moving with our professional DJs spinning the latest hits and classics.",
    },
    {
      id: 4,
      image: image4,
      title: "Wedding Planning",
      description:
        "Comprehensive wedding planning services to make your special day unforgettable.",
    },
    {
      id: 5,
      image: image5,
      title: "Corporate Events",
      description:
        "Tailored event planning and execution for corporate gatherings and team-building activities.",
    },
    {
      id: 6,
      image: image6,
      title: "Private Party Catering",
      description:
        "Delicious catering services for private celebrations, customized to your preferences.",
    },
  ];

  return (
    <>
      <Banner
        title="EXPLORE OUR SERVICES"
        subtitleFirst="We offer unforgettable experiences including"
        subtitles={subtitles}
      />
      <section className="w-full max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
          {serviceData.map((service) => (
            <ServiceCard
              key={service.id}
              serviceImage={service.image}
              serviceTitle={service.title}
              serviceDescription={service.description}
            />
          ))}
        </div>
      </section>
      <section className="pt-4 sm:pt-4 md:pt-10 bg-black">
        <GalleryMarquee />
      </section>
      <section className="py-8 sm:py-8 md:py-16 bg-black">
        <ExperiencingBeat />
      </section>
    </>
  );
};

export default Services;
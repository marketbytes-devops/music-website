import Marquee from "react-fast-marquee";
import image1 from "../../../assets/images/service-img-1.png";
import image2 from "../../../assets/images/service-img-1.png";
import image3 from "../../../assets/images/service-img-1.png";
import image4 from "../../../assets/images/service-img-1.png";
import StarTitle from "../../StarTitle";
import { useState } from "react";
import Button from "../../Button";

const GalleryMarquee = () => {
    const [isHovered, setIsHovered] = useState(false);

    const images = [
        image1,
        image2,
        image3,
        image4,
        image1,
        image2,
        image3,
        image4,
    ];

    return (
        <>
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6 md:mb-8"
            >
                <div className="flex flex-col sm:flex-row justify-between items-center w-full">
                    <div className="text-left">
                        <StarTitle
                            title="Gallery"
                            className="my-8 sm:my-4 md:my-8 text-sm sm:text-base md:text-lg text-white"
                            isParentHovered={isHovered}
                        />
                    </div>
                    <Button
                        name="View All"
                        className="w-fit text-xs sm:text-sm font-normal bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2"
                        onClick={() => alert('View All Events clicked!')}
                        dotColor="bg-textOrange"
                        gradient="bg-gradient-to-b from-[#F96141] via-[#662451] to-[#4D147E]"
                    />
                </div>
            </div>
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="mt-12 sm:mt-12 md:mt-0"
            >
                <Marquee pauseOnHover={true} speed={30} gradient={false}>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="mx-1 sm:mx-2"
                            style={{
                                width: index % 4 === 2 ? "250px" : "150px",
                                height: "150px",
                                maxWidth: index % 4 === 2 ? "70vw" : "40vw",
                                maxHeight: "40vw",
                            }}
                        >
                            <img
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </>
    );
};

export default GalleryMarquee;
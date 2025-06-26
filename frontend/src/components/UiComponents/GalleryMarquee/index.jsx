import Marquee from "react-fast-marquee";
import image1 from "../../../assets/images/service-img-1.png";
import image2 from "../../../assets/images/service-img-1.png";
import image3 from "../../../assets/images/service-img-1.png";
import image4 from "../../../assets/images/service-img-1.png";
import StarTitle from "../../StarTitle";
import { useState } from "react";

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
                className="max-w-7xl mx-auto"
            >
                <StarTitle
                    title="Gallery"
                    isParentHovered={isHovered}
                    className="text-left text-white mb-8 sm:mb-8 md:mb-16"
                />
            </div>
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Marquee pauseOnHover={true} speed={50} gradient={false}>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="mx-2"
                            style={{
                                width: index % 4 === 2 ? "500px" : "200px",
                                height: "200px",
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

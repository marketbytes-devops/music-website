import MainTitle from "../../MainTitle";
import bgImage from "../../../assets/images/experiencing.webp";

const ExperiencingBeat = () => {
  return (
    <div
      className="h-[400px] md:h-[500px] flex flex-col sm:flex-row items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div className="w-full sm:w-1/2 flex items-center justify-center sm:mb-0 mb-6">
        <h2
          id="hero-title"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-textGray transition-opacity duration-500 text-center sm:text-left"
        >
          <span className="font-medium block mb-3 sm:mb-4">Experiencing</span>
          <span className="font-thin">the Beat</span>
        </h2>
      </div>
      <div className="w-full sm:w-1/2 flex items-center justify-center sm:justify-start px-4 sm:px-0">
        <div className="space-y-4 sm:space-y-6 max-w-[90%] sm:max-w-full">
          <h3
            id="hero-title"
            className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-textGray secondary-font text-center sm:text-left"
          >
            <span className="block mb-2">Book your</span>
            <span>musician</span>
          </h3>
          <p className="text-textGray text-sm sm:text-base text-center sm:text-left">
            Stay in the Rhythm! Subscribe for Exclusive Events & Fresh Updates! Be
            the first to discover electrifying performances and unforgettable
            musical experiences!
          </p>
          <form className="pt-2 flex justify-center sm:justify-start">
            <div
              className="relative inline-block w-[90%] xs:w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%]"
              style={{
                background: "linear-gradient(90deg, #4D147E, #F96141, #662451)",
                padding: "1px",
                borderRadius: "5px",
              }}
            >
              <input
                type="email"
                placeholder="Your Email Address"
                required
                className="w-full text-xs sm:text-sm text-textGray bg-black border-none focus:outline-none px-2 sm:px-3 py-1.5 sm:py-2 rounded-[4px]"
                style={{
                  background: "black",
                }}
                css={{
                  "&::placeholder": {
                    color: "var(--textGray)",
                  },
                  "&::-webkit-input-placeholder": {
                    color: "var(--textGray)",
                  },
                  "&::-moz-placeholder": {
                    color: "var(--textGray)",
                  },
                  "&:-ms-input-placeholder": {
                    color: "var(--textGray)",
                  },
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExperiencingBeat;
const Card = ({ onClick, eventImage }) => {
    return (
        <div
            className="group rounded-3xl overflow-hidden shadow-lg bg-[#3c3c3c]"
            style={{
                backgroundImage: `url(${eventImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "380px",
            }}
        >
            <div className="flex items-center justify-center w-full h-full">
                <button
                    className="relative flex items-center justify-center focus:outline-none"
                    onClick={onClick}
                    aria-label="Play video"
                >
                    <span
                        className="absolute z-0 bg-white/5 rounded-full w-24 h-24 flex items-center justify-center transition-all duration-300 group-hover:scale-150 animate-[pulse-border_1500ms_ease-out_infinite]"
                    ></span>
                    <span
                        className="absolute z-0 bg-white/5 rounded-full w-24 h-24 flex items-center justify-center transition-all duration-300 group-hover:scale-125 animate-[pulse-border_1500ms_ease-out_infinite]"
                    ></span>
                    <span
                        className="relative z-10 text-md primary-font bg-white/5 hover:bg-white/20 transition-all duration-300 text-white rounded-full w-24 h-24 border flex items-center justify-center"
                    >
                        Play
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Card;
import { useId } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const StarTitle = ({ title, className, isParentHovered }) => {
  const gradientId = useId();

  const starVariants = {
    initial: { rotate: 0, scale: 1 },
    hovered: { rotate: 360, scale: 1.2, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  return (
    <h2
      className={`flex flex-wrap items-center justify-center md:justify-start space-x-1 sm:space-x-2 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium text-textGray primary-font ${className}`}
    >
      <motion.svg
        width="16"
        height="16"
        className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5"
        viewBox="0 0 26 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={starVariants}
        initial="initial"
        animate={isParentHovered ? 'hovered' : 'initial'}
      >
        <motion.path
          d="M0.82536 17.3465L10.1259 17.4347C10.2372 17.4368 10.3461 17.4671 10.4425 17.5228C10.5389 17.5784 10.6197 17.6576 10.6772 17.7529L15.4038 25.7633C15.4764 25.8845 15.5866 25.9787 15.7176 26.0317C15.8486 26.0847 15.9932 26.0936 16.1297 26.057C16.2662 26.0205 16.387 25.9404 16.474 25.829C16.5609 25.7177 16.6092 25.581 16.6115 25.4397L16.6997 16.1392C16.7019 16.0279 16.7322 15.919 16.7878 15.8225C16.8435 15.7261 16.9227 15.6454 17.018 15.5879L25.0284 10.8613C25.1496 10.7886 25.2438 10.6785 25.2968 10.5475C25.3498 10.4165 25.3587 10.2718 25.3221 10.1354C25.2855 9.99888 25.2055 9.87802 25.0941 9.79109C24.9827 9.70415 24.846 9.65587 24.7048 9.65355L15.4043 9.56535C15.293 9.56321 15.184 9.5329 15.0876 9.47724C14.9912 9.42158 14.9105 9.34239 14.853 9.24706L10.1263 1.23669C10.0537 1.1155 9.94354 1.02128 9.81256 0.968281C9.68158 0.915285 9.5369 0.906399 9.40042 0.94297C9.26394 0.97954 9.14308 1.05957 9.05615 1.17096C8.96922 1.28235 8.92093 1.41902 8.91861 1.5603L8.83041 10.8608C8.82828 10.9721 8.79796 11.0811 8.7423 11.1775C8.68664 11.2739 8.60745 11.3546 8.51212 11.4121L0.501749 16.1387C0.380561 16.2114 0.286339 16.3215 0.233343 16.4525C0.180347 16.5835 0.171461 16.7282 0.208031 16.8647C0.244602 17.0011 0.324637 17.122 0.436023 17.2089C0.547409 17.2959 0.684084 17.3441 0.82536 17.3465Z"
          fill={`url(#${gradientId})`}
          stroke="#F96141"
          strokeWidth="0.1875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id={gradientId}
            x1="4.73836"
            y1="5.4764"
            x2="20.7918"
            y2="21.5236"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F96141" />
            <stop offset="1" stopColor="#4D147E" />
          </linearGradient>
        </defs>
      </motion.svg>
      <span className="break-words">{title}</span>
      <motion.svg
        width="16"
        height="16"
        className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5"
        viewBox="0 0 26 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={starVariants}
        initial="initial"
        animate={isParentHovered ? 'hovered' : 'initial'}
      >
        <motion.path
          d="M0.82536 17.3465L10.1259 17.4347C10.2372 17.4368 10.3461 17.4671 10.4425 17.5228C10.5389 17.5784 10.6197 17.6576 10.6772 17.7529L15.4038 25.7633C15.4764 25.8845 15.5866 25.9787 15.7176 26.0317C15.8486 26.0847 15.9932 26.0936 16.1297 26.057C16.2662 26.0205 16.387 25.9404 16.474 25.829C16.5609 25.7177 16.6092 25.581 16.6115 25.4397L16.6997 16.1392C16.7019 16.0279 16.7322 15.919 16.7878 15.8225C16.8435 15.7261 16.9227 15.6454 17.018 15.5879L25.0284 10.8613C25.1496 10.7886 25.2438 10.6785 25.2968 10.5475C25.3498 10.4165 25.3587 10.2718 25.3221 10.1354C25.2855 9.99888 25.2055 9.87802 25.0941 9.79109C24.9827 9.70415 24.846 9.65587 24.7048 9.65355L15.4043 9.56535C15.293 9.56321 15.184 9.5329 15.0876 9.47724C14.9912 9.42158 14.9105 9.34239 14.853 9.24706L10.1263 1.23669C10.0537 1.1155 9.94354 1.02128 9.81256 0.968281C9.68158 0.915285 9.5369 0.906399 9.40042 0.94297C9.26394 0.97954 9.14308 1.05957 9.05615 1.17096C8.96922 1.28235 8.92093 1.41902 8.91861 1.5603L8.83041 10.8608C8.82828 10.9721 8.79796 11.0811 8.7423 11.1775C8.68664 11.2739 8.60745 11.3546 8.51212 11.4121L0.501749 16.1387C0.380561 16.2114 0.286339 16.3215 0.233343 16.4525C0.180347 16.5835 0.171461 16.7282 0.208031 16.8647C0.244602 17.0011 0.324637 17.122 0.436023 17.2089C0.547409 17.2959 0.684084 17.3441 0.82536 17.3465Z"
          fill={`url(#${gradientId}-2)`}
          stroke="#F96141"
          strokeWidth="0.1875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id={`${gradientId}-2`}
            x1="4.73836"
            y1="5.4764"
            x2="20.7918"
            y2="21.5236"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F96141" />
            <stop offset="1" stopColor="#4D147E" />
          </linearGradient>
        </defs>
      </motion.svg>
    </h2>
  );
};

StarTitle.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  isParentHovered: PropTypes.bool,
};

StarTitle.defaultProps = {
  className: '',
  isParentHovered: false,
};

export default StarTitle;
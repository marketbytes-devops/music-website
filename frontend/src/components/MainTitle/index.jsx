import PropTypes from 'prop-types';

const MainTitle = ({ firstTitle, secondTitle, thirdTitle, className }) => {
  return (
    <h2
      className={`flex flex-wrap items-center justify-center md:justify-start space-x-1 sm:space-x-2 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium text-textGray primary-font ${className}`}
    >
      <span className="font-thin">{firstTitle}</span>
      <span className="font-medium">{secondTitle}</span>
      <span className="font-thin">{thirdTitle}</span>
    </h2>
  );
};

MainTitle.propTypes = {
  firstTitle: PropTypes.string.isRequired,
  secondTitle: PropTypes.string.isRequired,
  thirdTitle: PropTypes.string.isRequired,
  className: PropTypes.string,
};

MainTitle.defaultProps = {
  className: '',
};

export default MainTitle;
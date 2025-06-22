import PropTypes from 'prop-types';

const Button = ({ name, onClick, className = '', stylesInline = {}, dotColor = 'bg-textOrange', gradient = 'bg-gradient-to-b from-[#F96141] via-[#662451] to-[#4D147E]' }) => {
  return (
    <div className="group relative p-[1.5px] inline-block rounded-full overflow-hidden">
      <div
        className={`absolute inset-0 rounded-full ${gradient} animate-spin group-hover:animate-none`}
      ></div>
      <button
        className={`relative rounded-full flex items-center justify-center ${className} hover:translate-x-[0.10em] active:translate-x-[0.10em] active:translate-y-[0.15em] transition-all duration-300`}
        onClick={onClick}
        style={stylesInline}
        aria-label={name}
      >
        <span>{name}</span>
        <span
          className={`ml-4 ${dotColor} w-2 h-2 rounded-full`}
          aria-hidden="true"
        ></span>
      </button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  stylesInline: PropTypes.object,
  dotColor: PropTypes.string,
  gradient: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
  stylesInline: {},
  dotColor: 'bg-textOrange',
  gradient: 'bg-gradient-to-b from-[#F96141] via-[#662451] to-[#4D147E]',
};

export default Button;
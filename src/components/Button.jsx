import PropTypes from 'prop-types';
import {BsPlus} from 'react-icons/bs';
// reusable button component
const Button = ({children, type, isDisabled}) => { 
  return (
    <button type={type} disabled={isDisabled} className="btn">
    <BsPlus fontSize="52px"/>
      {children}
    </button>
  );
};
// defaultProps is set to type and isDisabled
Button.defaultProps = {
  type: "button",
  isDisabled: false,
};

// propTypes is set to string and isDisabled is set to boolean
Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
// export
import "./Toggle.css";
import PropTypes from 'prop-types';

export const Toggle = ({ isChecked, handleChange }) => {

  return (
    <div className="toggle-container">
      <input type="checkbox" id="check" className="toggle" onChange={handleChange} checked={isChecked} 

      />

      <label htmlFor="check">Dark Mode</label>
    </div>
  );
};

Toggle.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired
};

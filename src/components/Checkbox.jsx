import PropTypes from 'prop-types';
// checkbox
const Checkbox = ({label, value, onChange}) => {
  return (
    <label className='check-label'>
      <input type="checkbox" checked={value} onChange={onChange}/>
      <p>{label}</p>
    </label>
  );
};
// propTypes is set to label, value and onChange
Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};
// export
export default Checkbox;
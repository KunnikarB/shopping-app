import PropTypes from 'prop-types';
// reusable card component 
// dark and light mode 
const Card = ({ children, reverse, }) => {
  return (
    // style
    <div className='todo-card'
      style={{ backgroundColor: reverse? "#000" : "magenta", color: reverse? "orange" : "magenta"}} 
       >
      {children}
    </div>
  );
}
// defaultProps is set to reverse
Card.defaultProps = {
    reverse: false,
  };
// propTypes is set to children and reverse 
  Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
  };
  
  export default Card;
  // export
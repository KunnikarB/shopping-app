import { authenticate } from '../helpers';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';


const PrivateRoute = ({ children } ) => {
  const auth = authenticate();
  return auth ? children : <Navigate to="/Login" />;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  
}
export default PrivateRoute;
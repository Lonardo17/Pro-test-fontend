import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

import routes from 'utils/router';

const PublicRoute = ({ navTo = routes.home, children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log(isLoggedIn);
  return isLoggedIn ? <Navigate to={navTo} /> : children;
};

export default PublicRoute;

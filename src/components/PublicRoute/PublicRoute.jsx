import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

import routes from 'utils/router';

const PublicRoute = ({ navTo = routes.home, children, restricted = false }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  // return isLoggedIn ? <Navigate to={navTo} /> : children;
  return shouldRedirect ? <Navigate to={navTo} replace /> : children;
};

export default PublicRoute;

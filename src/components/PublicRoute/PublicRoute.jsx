import { Navigate } from 'react-router-dom';

import routes from 'utils/router';

const PublicRoute = ({ restricted = false, navTo = routes.home, children }) => {
  const isLoggedIn = false; //TODO: add Redux Auth State support
  return isLoggedIn && restricted ? <Navigate to={navTo} /> : children;
};

export default PublicRoute;

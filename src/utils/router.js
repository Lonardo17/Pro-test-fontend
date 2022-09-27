import { techTest, theoryTest } from './constants';

const routes = {
  home: '/',
  auth: '/auth',
  theoryTestPath: `/test/${theoryTest}`,
  techTestPath: `/test/${techTest}`,
  results: '/results',
  materials: '/useful-info',
  contacts: '/contacts',
};

export const checkActive = (match, location) => {
  if (!location) return false;
  const { pathname } = location;
  console.log(pathname);
  return pathname === '/';
};

export default routes;

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

export default routes;

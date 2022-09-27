import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from '../utils/router';
import SharedLayout from './SharedLayout';
import Loader from './Loader';

const {
  home,
  auth,
  theoryTestPath,
  techTestPath,
  results,
  materials,
  contacts,
} = routes;
const AuthView = lazy(() => import('../views/AuthView/AuthView'));
const HomeView = lazy(() => import('../views/HomeView/HomeView'));
const ContactsView = lazy(() => import('../views/ContactsView/ContactsView'));
const MaterialsViews = lazy(() =>
  import('../views/MaterialsView/MaterialsViews')
);
const TestView = lazy(() => import('../views/TestView/TestView'));
const ResultViews = lazy(() => import('../views/ResultView/ResultViews'));
export const App = () => {
  return (
    <div className="page">
      <Suspense fallback={<Loader />}>
        {true && (
          <Routes>
            <Route path={home} element={<SharedLayout />}>
              <Route path={auth} element={<AuthView />} />
              <Route index element={<HomeView />} />
              <Route path={contacts} element={<ContactsView />} />
              <Route path={materials} element={<MaterialsViews />} />
              <Route path={techTestPath} element={<TestView />} />
              <Route path={theoryTestPath} element={<TestView />} />
              <Route path={results} element={<ResultViews />} />
            </Route>
          </Routes>
        )}
      </Suspense>
    </div>
  );
};

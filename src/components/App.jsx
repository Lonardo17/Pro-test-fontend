import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from '../utils/router';
import SharedLayout from './SharedLayout';
import Loader from './Loader';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

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
const TestViews = lazy(() => import('../views/TestView/TestView'));
const ResultViews = lazy(() => import('../views/ResultView/ResultViews'));
export const App = () => {
  return (
    <div className="page">
      <Suspense fallback={<Loader />}>
        {true && (
          <Routes>
            <Route path={home} element={<SharedLayout />}>
              <Route
                path={auth}
                element={
                  <PublicRoute>
                    <AuthView />
                  </PublicRoute>
                }
              />
              <Route
                index
                element={
                  <PrivateRoute>
                    <HomeView />
                  </PrivateRoute>
                }
              />
              <Route
                path={techTestPath}
                element={
                  <PrivateRoute>
                    <TestView />
                  </PrivateRoute>
                }
              />
              <Route
                path={theoryTestPath}
                element={
                  <PrivateRoute>
                    <TestView />
                  </PrivateRoute>
                }
              />
              <Route
                path={results}
                element={
                  <PrivateRoute>
                    <ResultViews />
                  </PrivateRoute>
                }
              />
              <Route
                path={materials}
                element={
                  <PrivateRoute>
                    <MaterialsViews />
                  </PrivateRoute>
                }
              />
              <Route
                path={contacts}
                element={
                  <PrivateRoute>
                    <ContactsView />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        )}
      </Suspense>
    </div>
  );
};

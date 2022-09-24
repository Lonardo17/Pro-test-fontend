import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import routes from '../utils/router';
import SharedLayout from './SharedLayout';
import Loader from './Loader';

const { home, auth, test, results, materials, contacts } = routes;
const AuthView = lazy(() => import('../views/AuthView/AuthView'));
const HomeView = lazy(() => import('../views/HomeView/HomeView'));
const ContactsView = lazy(() => import('../views/ContactsView/ContactsView'));
const MaterialsViews = lazy(() =>
  import('../views/MaterialsView/MaterialsViews')
);
const TestViews = lazy(() => import('../views/TestView/TestViews'));
const ResultViews = lazy(() => import('../views/ResultView/ResultViews'));
export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        {true && (
          <Routes>
            <Route path={auth} element={<SharedLayout />}>
              <Route index element={<AuthView />} />
              <Route exact path={home} element={<HomeView />} />
              <Route path={contacts} element={<ContactsView />} />
              <Route path={materials} element={<MaterialsViews />} />
              <Route path={test} element={<TestViews />} />
              <Route path={results} element={<ResultViews />} />
            </Route>
          </Routes>
        )}
      </Suspense>
    </div>
  );
};

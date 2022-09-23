import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from '../utils/router';
const { home, test, results, materials, contacts } = routes;
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
    // <Header/>
    <div>
      <Suspense fallback={null}>
        {false && <AuthView />}
        {true && (
          <Routes>
            <Route exact path={home} element={<HomeView />} />
            <Route path={contacts} element={<ContactsView />} />
            <Route path={materials} element={<MaterialsViews />} />
            <Route path={test} element={<TestViews />} />
            <Route path={results} element={<ResultViews />} />
          </Routes>
        )}
      </Suspense>
    </div>
  );
};

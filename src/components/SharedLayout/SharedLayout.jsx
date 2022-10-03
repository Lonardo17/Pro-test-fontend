import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Human from '../Human/Human'; 


import Header from 'components/Header';
import Loader from 'components/Loader';
import Footer from 'components/Footer';

const SharedLayout = () => {
    const isRefreshing = false; //TODO: add Redux Auth State support
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <div>{isRefreshing ? <Loader /> : <Outlet />}</div>
      </Suspense>
      <Human/>
      <Footer />
    </>
  );
};

export default SharedLayout;

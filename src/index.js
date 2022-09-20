import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { store} from './redux/store';
// import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/pro-test/"> */}
          <App />
        {/* </BrowserRouter>
      </PersistGate> */}
    </Provider>
  </React.StrictMode>
);

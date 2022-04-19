import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from './App';
import { persistor, store } from "./redux";
import { GlobalStyle } from './style/globalStyle';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <GlobalStyle/>
      </PersistGate>
    </Provider>

  </React.StrictMode>,
 
);



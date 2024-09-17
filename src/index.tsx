import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import Store from './store/store';
import './assets/scss/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider Store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

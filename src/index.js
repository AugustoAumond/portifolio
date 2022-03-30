import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import MyRoutes from './Routes';

const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <MyRoutes/>
  </StrictMode>,
  rootElement
);


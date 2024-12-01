// @ts-check
import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import './index.css';
import {LoggedInContextProvider} from './model/context/provider';
import {router} from './router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <LoggedInContextProvider>
    <RouterProvider router={router} />
  </LoggedInContextProvider>
  // </React.StrictMode>
);

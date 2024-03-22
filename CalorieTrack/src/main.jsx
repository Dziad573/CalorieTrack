import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    element: <App></App>,
    path: '/',
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

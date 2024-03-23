import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { Form } from './components/Form/Form.jsx';
import { List } from './components/List/List.jsx';
import { TopBar } from './components/TopBar/TopBar.jsx';
import { MealDetails } from './components/MealDetails/MealDetails.jsx';

const router = createBrowserRouter([
  {
    element: <App></App>,
    path: '/',
  },
  {
    element: <>
      <TopBar></TopBar>
      <Form></Form>
    </>
    ,
    path: '/kalkulator',
  },
  {
    element: <>
              <TopBar></TopBar>
              <List>
                <MealDetails/>
              </List>
            </>,
    path: '/lista/:restaurant',
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
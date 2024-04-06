import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/Login.jsx';
import Errorpage from './pages/404.jsx';
import Home from './pages/home.jsx';

import {Provider} from 'react-redux';
import store from "./redux/store"


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />,
    // errorElement: <Errorpage />
  },
  {
    path: "/detail/:id",
    element:<LoginPage />,
    // errorElement: <Errorpage />
  },
  {
    path: "/register",
    element:<LoginPage />,
    // errorElement: <Errorpage />
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/login-page';
import { Layout } from '../components/layout';
import ForgotPage from './pages/forgot-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },

      {
        path: 'forgot',
        element: <ForgotPage />,
      },
    ],
  },
]);

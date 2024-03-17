import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/login-page';
import { Layout } from '../components/layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
]);

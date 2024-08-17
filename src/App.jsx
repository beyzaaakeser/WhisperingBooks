import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Undefined from './pages/Undefined';
import Detail from './pages/Detail';
import Products from './pages/Products';
import Layout from './components/Layout';

const Story = () => <h1>STORY</h1>;
const Novel = () => <h1>NOVEL</h1>;

// createBrowserRouter ile tüm rotaları tanımlıyoruz
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout/>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        element: <Products />,
        children: [
          { path: 'story', element: <Story /> },
          { path: 'novel', element: <Novel /> },
        ],
      },
      {
        path: 'detail/:id',
        element: <Detail />,
      },
      {
        path: '*',
        element: <Undefined />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

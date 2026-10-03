import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
import { ServicesPage } from '../pages/ServicesPage';
import { AboutPage } from '../pages/AboutPage';
import { GalleryPage } from '../pages/GalleryPage';
import { ContactPage } from '../pages/ContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'productos',
        element: <ProductsPage />,
      },
      {
        path: 'servicios',
        element: <ServicesPage />,
      },
      {
        path: 'galeria',
        element: <GalleryPage />,
      },
      {
        path: 'nosotros',
        element: <AboutPage />,
      },
      {
        path: 'contacto',
        element: <ContactPage />,
      },
    ],
  },
]);

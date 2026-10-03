import { RouterProvider } from 'react-router-dom';
import { router } from './router/AppRouter';
import { WhatsAppFloatButton } from './components/layout/WhatsAppFloatButton';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <WhatsAppFloatButton />
    </>
  );
}

export default App;

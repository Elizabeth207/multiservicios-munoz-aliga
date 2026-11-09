import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileBottomNav } from './MobileBottomNav';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="pb-[calc(4.75rem+env(safe-area-inset-bottom))] lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
};

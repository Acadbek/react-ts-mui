import { Sidebar } from '@/components/sidebar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-[282px] flex-grow flex justify-center items-center">
        <div className="container w-full max-w-[1230px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

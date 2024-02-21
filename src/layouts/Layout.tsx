import { Sidebar } from '@/components/sidebar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <main className='ml-64 flex-grow flex justify-center items-center'>
        <div className='container border w-full max-w-[1230px] h-[150vh]'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

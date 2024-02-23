import { Sidebar } from '@/components/sidebar';
import { openModal } from '@/store/products';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-[282px] flex-grow flex justify-center items-center">
        <div className="container w-full max-w-[1230px]">
          <button
            onClick={() => dispatch(openModal())}
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Toggle modal
          </button>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

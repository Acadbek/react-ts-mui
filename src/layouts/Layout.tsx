import { Sidebar } from '@/components/sidebar';
import { openModal } from '@/store/products';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className='text-black pt-3 pb-5 bg-white pl-[312px] absolute top-0 w-full'>
        <div className='flex x-between mr-5'>
          <div>
            <p className='apply text-2xl font-bold leading-[30px] tracking-[0.20px] text-left'>
              Product List
            </p>
            <p className='text-xs font-normal leading-[19px] tracking-[0px] text-left text-[#64748B] mt-1'>Detailed information about your products</p>
          </div>
          <div className='flex y-center gap-6'>
            <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative w-[275px] h-12">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <img className='mt-1' src="/src/assets/icons/Search.svg" alt="" />
              </div>
              <input type="search" id="search" className="block bg-white w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500" placeholder="Search anything..." required />
            </div>
            <img className="!w-10 !h-10 cursor-pointer" src="/src/assets/icons/icon.svg" alt="" />
            <img className='cursor-pointer' src="/src/assets/images/24px.png" alt="" />
          </div>
        </div>
        <div className='flex y-center x-between gap-4 mt-[30px]'>
          <div className='flex y-center gap-4'>
            <select id="countries" className="w-[168px] text-[#64748B] font-medium leading-[22px] tracking-[0.20] bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
              <option defaultValue>Best sellers</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <select id="countries" className="w-[168px] text-[#64748B] font-medium leading-[22px] tracking-[0.20] bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
              <option defaultValue>All Categories</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div className='flex y-center'>
            <button
              onClick={() => dispatch(openModal())}
              className="flex gap-2 y-center mr-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              <img src="/src/assets/icons/pluss.svg" alt="" /> New Product
            </button>
            <button className='w-12 h-12 flex justify-center items-center rounded-md hover:bg-[#edf2f7]'><img src="/src/assets/icons/list.svg" alt="List Icon" /></button>
            <button className='w-12 h-12 mr-4 flex justify-center items-center rounded-md hover:bg-[#edf2f7]'><img src="/src/assets/icons/Vector.svg" alt="Vector Icon" /></button>
          </div>
        </div>
      </div>
      <div className="flex">
        <Sidebar />
        <main className="ml-[282px] mt-[162px] flex-grow flex justify-center items-center">
          <div className="container w-full max-w-[1230px]">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

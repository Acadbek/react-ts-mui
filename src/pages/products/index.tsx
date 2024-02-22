import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { productApi } from '@/api/products';
import Checkbox from '@/components/table/checkbox';

export const Products = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: productApi.getProducts,
    staleTime: Infinity,
  });

  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching products</div>;

  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <div className="relative mt-8 p-6 overflow-x-auto shadow-[10px_10px_50px_0px_#64748B0A] sm:rounded-lg bg-white">
        <table className="w-full border-spacing-6 text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400">
          <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-[#edf2f7] h-16 box-border leading-6 tracking-[0.2px] text-left">
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-offset-gray-100 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 ">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Brand
              </th>
              <th scope="col" className="px-6 py-3">
                Stock
              </th>
              <th scope="col" className="px-6 py-3">
                Sales
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                <button>
                  <img src="src/assets/icons/dots.svg" alt="" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="text-base text-[#0F172A] font-semibold leading-6 tracking-[0.20px] text-left">
            {data?.map((item) => (
              <tr key={item?.id} className="bg-white h-16 border-b border-[#F1F5F9]">
                <td className="w-4 p-4">
                  <Checkbox />
                </td>
                <th
                  scope="row"
                  className="flex items-center pl-2 gap-4 px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <img
                    className="w-12 h-12"
                    src={item.productImages[0] || 'https://picsum.photos/seed/picsum/200/300'}
                    alt=""
                  />
                  {item?.title}
                </th>
                <td className="px-6 py-4">{item?.brand?.title}</td>
                <td className="px-6 py-4">{item?.stock}</td>
                <td className="px-6 py-4">{item?.sales}</td>
                <td className="px-6 py-4">{item?.productPricings?.price}</td>
                <td className="px-6 py-4">
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked={item?.status} value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-[#cbd5e1] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#2563eb]"></div>
                  </label>
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 hover:underline">
                    <img src="/src/assets/icons/dots.svg" alt="" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing <span className="font-semibold text-gray-900">1-10</span> of{' '}
            <span className="font-semibold text-gray-900">1000</span>
          </span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

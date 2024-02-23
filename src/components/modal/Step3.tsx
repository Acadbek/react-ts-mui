import { closeModal } from '@/store/products';
import { StepProps } from '@/types';
import { useDispatch } from 'react-redux';

const Step3 = ({ prev, taxRule, minOrder }: StepProps) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex px-4 pt-4 pb-3 y-center x-between border-b">
        <p className="text-lg font-bold leading-[25px] tracking-[0.20px] text-left">Pricing</p>
        <img
          className="p-2 cursor-pointer rounded-md hover:bg-[#F8FAFC]"
          onClick={() => dispatch(closeModal())}
          src="/src/assets/icons/close.svg"
          alt="Close"
        />
      </div>
      <div className="p-4">
        <p className="text-sm font-bold leading-[22px] tracking-[0px] text-left">Tax excluded price</p>
        <input
          type="text"
          id="first_name"
          className="mt-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
          placeholder="John"
          required
        />
        <p className="text-sm mt-7 font-bold leading-[22px] tracking-[0px] text-left">Tax excluded price</p>
        <input
          type="text"
          id="first_name"
          className="mt-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
          placeholder="John"
          required
        />
        <p className="text-sm mt-7 font-bold leading-[22px] tracking-[0px] text-left">Tax rule</p>
        <select
          id="countries"
          className="bg-white mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          {taxRule?.map(({ title, id }) => (
            <option key={id} value="US">
              {title}
            </option>
          ))}
        </select>
        <div className="grid grid-cols-2 mt-7 gap-5">
          <div className="col-span-1">
            <p className="text-sm font-bold leading-[22px] tracking-[0px] text-left">Unit Price</p>
            <select
              id="countries"
              className="bg-white mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {minOrder?.map(({ title, id }) => (
                <option key={id} value="US">
                  {title}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-1">
            <p className="text-sm font-bold leading-[22px] tracking-[0px] text-left">Minimum order</p>
            <select
              id="countries"
              className="bg-white mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {taxRule?.map(({ title, id }) => (
                <option key={id} value="US">
                  {title}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={() => prev()}
            type="button"
            className="col-span-1 py-2.5 mt-12 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 w-full"
          >
            Previous
          </button>
          <button
            type="submit"
            className="col-span-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full mt-12"
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
};

export default Step3;

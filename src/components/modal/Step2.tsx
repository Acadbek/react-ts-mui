import { closeModal } from '@/store/products';
import { StepProps } from '@/types';
import { useDispatch } from 'react-redux';

const Step2 = ({ next, prev, keyboardLang, memory, storages, warranty, warrantyType }: StepProps) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex px-4 pt-4 pb-3 y-center x-between border-b">
        <p className="text-lg font-bold leading-[25px] tracking-[0.20px] text-left">Specification</p>
        <img
          className="p-2 cursor-pointer rounded-md hover:bg-[#F8FAFC]"
          onClick={() => dispatch(closeModal())}
          src="/src/assets/icons/close.svg"
          alt="Close"
        />
      </div>
      <div className="grid grid-cols-2 gap-6 p-4">
        <div className="col-span-2">
          <p className="flex y-center gap-1 text-sm font-bold leading-[22px] tracking-[0px] text-left">
            Keyboard language <img src="/src/assets/icons/alert-circle.svg" alt="" />
          </p>
          <select
            id="countries"
            className="bg-white mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            {keyboardLang?.map(({ title, id }) => (
              <option key={id} value="US">
                {title}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-1">
          <p className="text-sm font-bold leading-[22px] tracking-[0px] text-left">Memory</p>
          <select
            id="countries"
            className="bg-white mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            {memory?.map(({ title, id }) => (
              <option key={id} value="US">
                {title}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-1">
          <p className="text-sm font-bold leading-[22px] tracking-[0px] text-left">Storages</p>
          <select
            id="countries"
            className="bg-white mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            {storages?.map(({ title, id }) => (
              <option key={id} value="US">
                {title}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-1">
          <p className="text-sm font-bold leading-[22px] tracking-[0px] text-left">Product weight</p>
          <select
            id="countries"
            className="bg-white mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            {keyboardLang?.map(({ title, id }) => (
              <option key={id} value="US">
                {title}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-1">
          <p className="text-sm font-bold leading-[22px] tracking-[0px] text-left">Dimension (L x W x T)</p>
          <select
            id="countries"
            className="bg-white mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            {keyboardLang?.map(({ title, id }) => (
              <option key={id} value="US">
                {title}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-1">
          <p className="text-sm font-bold leading-[22px] tracking-[0px] text-left">Warranty</p>
          <select
            id="countries"
            className="bg-white mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            {warranty?.map(({ title, id }) => (
              <option key={id} value="US">
                {title}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-1">
          <p className="text-sm font-bold leading-[22px] tracking-[0px] text-left">Warranty type</p>
          <select
            id="countries"
            className="bg-white mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            {warrantyType?.map(({ title, id }) => (
              <option key={id} value="US">
                {title}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={() => prev?.()}
          type="button"
          className="col-span-1 mt-3 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 w-full"
        >
          Previous
        </button>
        <button
          onClick={() => next?.()}
          type="button"
          className="col-span-1 mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Step2;

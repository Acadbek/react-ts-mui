import { closeModal } from "@/store/products"
import { useDispatch } from "react-redux"

const Information = () => {
  const dispatch = useDispatch()
  return (
    <>
      <div className="flex px-4 pt-4 pb-3 y-center x-between border-b">
        <p className="text-lg font-bold leading-[25px] tracking-[0.20px] text-left">Product Information</p>
        <img
          className="p-2 cursor-pointer rounded-md hover:bg-[#F8FAFC]"
          onClick={() => dispatch(closeModal())}
          src="/src/assets/icons/close.svg"
          alt="Close"
        />
      </div>
      <div className="px-4 mt-4">
        <p className="text-sm font-bold leading-[22px] tracking-[0px] text-lef">
          Product image <span className="text-[#ED4F9D]">*</span>
        </p>
        <p className="text-xs font-normal text-[#64748B] mt-1 leading-[19px] tracking-[0px] text-left">
          Image format .jpg .jpeg .png and minimum size 300 x 300px
        </p>
        <div className="grid grid-cols-4 gap-2 mt-4">
          <img className="col-span-1" src="/src/assets/images/image-cover.png" alt="Cover img" />
          <img className="col-span-1" src="/src/assets/images/cover-img-2.png" alt="Cover img" />
          <img className="col-span-1" src="/src/assets/images/cover-img-3.png" alt="Cover img" />
          <div className="col-span-1 flex items-center justify-center w-full">
            <label
              htmlFor="download-file"
              className="w-full h-full flex flex-col x-center y-center bg-[#f8fafc] rounded-xl"
            >
              <img className="w-8 h-8" src="/src/assets/icons/cloud-upload.svg" alt="Upload icon" />
              <p className="text-[10px] cursor-pointer font-bold leading-[19px] tracking-[0px] text-[#2563EB] text-center">
                New Image
              </p>
              <input id="download-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <p className="text-sm font-bold leading-[22px] tracking-[0px] text-left mt-4">
          Product name <span className="text-[#ED4F9D]">*</span>
        </p>
        <p className="text-xs font-normal text-[#64748B] mt-1 leading-[19px] tracking-[0px] text-left">
          Include min. 40 characters to make it more interesting
        </p>
        <input
          type="text"
          id="first_name"
          className="bg-gray-100 mt-4 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 "
          placeholder="Product name"
          required
        />

        <p className="text-sm font-bold leading-[22px] tracking-[0px] text-left mt-4">
          Product descriptions <span className="text-[#ED4F9D]">*</span>
        </p>
        <p className="text-xs font-normal text-[#64748B] mt-1 leading-[19px] tracking-[0px] text-left">
          Include min. 260 characters to make it easier for buyers to understand and find your product
        </p>
        <textarea
          id="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 mt-4"
          placeholder="Type something..."
        ></textarea>
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-1">
            <p className="text-sm font-bold leading-[22px] tracking-[0px] text-left mt-4">Brand</p>
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">
              Select an option
            </label>
            <select
              id="countries"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {errorBrand && <span>{errorBrand}</span>}
              {brands?.map(({ id, title }) => (
                <option key={id} value="apple">{title}</option>
              ))}
            </select>
            <button
              onClick={() => dispatch(closeModal())}
              type="button"
              className="py-2.5 mt-12 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 w-full"
            >
              Cancel
            </button>
          </div>
          <div className="col-span-1">
            <p className="text-sm font-bold leading-[22px] tracking-[0px] text-left mt-4">Category</p>
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">
              Select an option
            </label>
            <select
              id="countries"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              {category.map(({ title, id }) => (
                <option key={id} value="US">{title}</option>
              ))}
            </select>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full mt-12"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

import { Icon } from "@iconify/react";

const DeleteModal = ({ title, message, confirmDelete, cancelDelete, isRemoveAll, totalItems }) => {
  return (
    <div className="h-[100vh] w-full bg-[#1C1B1B] bg-opacity-60 fixed top-0 left-0 z-[100]">
      <div className="w-full max-w-md bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl px-5 py-8">
        <div>
          <div
            onClick={cancelDelete}
            className="absolute top-5 right-8 h-7 lg:h-8 w-7 lg:w-8 rounded-full bg-primary text-white z-10 flex justify-center items-center cursor-pointer text-sm lg:text-xl font-bold"
            title="Remove Item"
          >
            <Icon icon="radix-icons:cross-2" />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-[#1C1B1B] text-lg font-semibold">{isRemoveAll ? `Remove ${totalItems} Items` : title}</h1>
          <p className="text-[#5F6C72] mt-2">{message}</p>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={cancelDelete}
            className="px-6 py-2 bg-gray text-white rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={confirmDelete}
            className="px-6 py-2 bg-secondary text-white rounded-lg"
          >
            Yes, Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { closeDeleteModal } from "../../redux/features/deleteModalSlice";
import { useDeleteSupplyMutation } from "../../redux/features/addSupply/supplyApi";
import { FaXmark } from "react-icons/fa6";

const DeleteModal = () => {
  const isOpen = useAppSelector((state) => state.deleteModal.isOpen);
  const id = useAppSelector((state) => state.deleteModal.id);
  const dispatch = useAppDispatch();
  const [deleteModal] = useDeleteSupplyMutation();

  // console.log("Delete Modal id", id);

  const handleDeleteModal = (id: string | undefined) => {
    deleteModal(id);
    dispatch(closeDeleteModal());
  };

  const handleModalClose = () => {
    dispatch(closeDeleteModal());
  };

  // set condition is !isOpen render nothing
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className="bg-slate-500 bg-opacity-50 fixed top-0  right-0 w-10/12 z-50 h-screen  flex justify-center items-center ">
        <div className=" w-11/12 lg:w-9/12 2xl:w-5/12 px-5 sm:px-10 lg:px-16 py-8 border h-64 bg-white rounded-xl relative">
          <h4 className="text-xl font-semibold">Are you sure?</h4>
          <p>You won't get back data upon delete.</p>
          <div className="flex justify-center items-center h-full">
            <button
              onClick={() => handleDeleteModal(id)}
              className="text-lg border border-red-500   hover:bg-red-500 hover:text-white rounded-lg transition-all duration-300 px-3 py-2"
            >
              Delete Supply
            </button>
          </div>
          <div className="absolute top-2 right-2 ">
            <FaXmark
              onClick={handleModalClose}
              className="hover:text-red-500 text-gray-500 size-6 transition-all duration-300"
            ></FaXmark>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;

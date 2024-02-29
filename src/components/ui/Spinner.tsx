import { FaSpinner } from "react-icons/fa6";

const Spinner = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
      <FaSpinner className="size-16 text-amber-500"></FaSpinner>
    </div>
  );
};

export default Spinner;

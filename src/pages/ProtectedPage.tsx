import { IoWarning } from "react-icons/io5";

const ProtectedPage = ({ permittedUser }: { permittedUser: string }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-amber-500">
      <div className="text-center flex flex-col justify-center items-center gap-10">
        <IoWarning className="text-red-500 text-9xl" />
        <h3 className="text-5xl font-semibold">
          Sorry! Only{" "}
          <span className="uppercase text-white">{permittedUser}</span> are
          allowed.
        </h3>
      </div>
    </div>
  );
};

export default ProtectedPage;

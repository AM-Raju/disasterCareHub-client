import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  if (!isRouteErrorResponse(error)) {
    return null;
  }
  return (
    <div className="bg-amber-500 w-full h-screen flex flex-col items-center justify-center">
      <div className="min-w-[90%] lg:min-w-[80%] xl:min-w-[50%] h-[35%] xl:h-[40%]  flex  items-center justify-center relative border border-white rounded-full">
        <div className="min-w-[80%] h-[80%] lg:h-[60%]  rounded-full relative ">
          <div className=" w-full h-full relative flex flex-col items-center justify-center">
            <div className="bg-white absolute rounded-full w-full h-full opacity-60 blur-sm"></div>
            <h1 className="text-amber-500  shrink-0  tracking-wider font-poppins font-bold text-4xl lg:text-6xl text-center relative">
              Error/404
            </h1>
            <p className="pt-5 text-red-600 font-poppins  z-50">
              <i>{error.statusText}</i>
            </p>
          </div>
        </div>
      </div>
      <Link to="/">
        <div className=" px-4 py-2 hover:px-16 transition-all duration-1000 rounded-full relative group mt-2">
          <div className="border w-full h-full absolute rounded-full top-0 left-0 "></div>
          <div className="group-hover:bg-amber-500 w-2 group-hover:w-16 h-[110%]  absolute top-0 group-hover:left-[calc(50%-32px)] transition-all duration-1000 "></div>
          <p className="relative font-poppins text-lg text-white tracking-wider">Home</p>
        </div>
      </Link>
    </div>
  );
};

export default ErrorPage;

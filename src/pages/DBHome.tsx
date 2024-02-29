const DBHome = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-200 ">
        <h3 className="text-3xl lg:text-[40px]">Welcome to</h3>
        <h1 className="text-4xl lg:text-[100px] font-bold leading-tight text-center text-amber-500">
          Disaster Care <span className="font-roboto font-thin">|</span>
          <span className="font-roboto font-light text-4xl"> hub</span>
        </h1>
        <div className="w-64 flex justify-between">
          <span>-------------</span>
          <h3>Dashboard</h3>
          <span>-------------</span>
        </div>
      </div>
    </div>
  );
};

export default DBHome;

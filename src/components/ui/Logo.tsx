const Logo = () => {
  return (
    <div className="w-fit">
      <h1 className="font-poppins text-3xl font-extrabold">
        <span className="text-amber-500 text-4xl">D</span>isaster
      </h1>
      <div className="flex items-baseline justify-start relative -top-2">
        <div className="flex gap-2">
          <div className="h-1 w-2 bg-amber-500"></div>
          <div className="h-1 w-10 mr-2 bg-black"></div>
        </div>
        <h4 className="tracking-wide">Care Hub</h4>
      </div>
    </div>
  );
};

export default Logo;

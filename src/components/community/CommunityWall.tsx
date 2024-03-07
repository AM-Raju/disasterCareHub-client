const CommunityWall = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-160px)] bg-amber-500 gap-3">
      <h3 className="text-3xl">Welcome to</h3>
      <h2 className="text-6xl font-semibold">
        <span className="line-through">Our</span> Your{" "}
        <span className="uppercase text-white">Community</span>
      </h2>
      <p className="text-xl">We value your thought in every aspect.</p>
    </div>
  );
};

export default CommunityWall;

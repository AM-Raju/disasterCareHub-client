import user1 from "../../assets/users/user1.jpg"

const LeaderBoardBar = () => {
  return (
    <div className="flex items-center bg-white border h-40 relative group">
      <div className="bg-amber-500 w-full h-full group-hover:blur-md transition-all duration-300 absolute opacity-60 "></div>
      <div className="h-full w-full bg-white    p-5 grid grid-cols-12 divide-x divide-amber-500 text-center z-10">
        <h3 className="col-span-1 place-self-center">01</h3>
        <div className=" h-full overflow-hidden col-span-3 ">
          <img className="object-fill mx-auto  w-40" src={user1} alt="" />
        </div>
        <h3 className="col-span-2 flex items-center justify-center">Wllium Blake</h3>
        <div className="col-span-2 flex flex-col justify-center">
          <p>CEO</p>
          <p>Navana Corp.</p>
        </div>
        <p className="col-span-2 flex items-center justify-center">$1000</p>
        <p className="col-span-2 flex items-center justify-center">Top Donor</p>
      </div>
    </div>
  );
};

export default LeaderBoardBar;

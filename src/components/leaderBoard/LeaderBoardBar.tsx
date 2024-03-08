import DonorBadge from "../ui/DonorBadge";

const LeaderBoardBar = ({ index, donor }) => {
  let donorBadge;

  if (index === 0) {
    donorBadge = <DonorBadge>1</DonorBadge>;
  } else if (index === 1) {
    donorBadge = <DonorBadge>2</DonorBadge>;
  } else if (index === 2) {
    donorBadge = <DonorBadge>3</DonorBadge>;
  } else {
    donorBadge = (
      <p className=" font-semibold text-amber-600 tracking-wider">
        Honorable <br /> Donor
      </p>
    );
  }
  return (
    <div className="flex items-center bg-white border h-40 relative group">
      <div className="bg-amber-500 w-full h-full group-hover:blur-md transition-all duration-300 absolute opacity-60 "></div>
      <div className="h-full w-full bg-white    p-5 grid grid-cols-12 divide-x divide-amber-500 text-center z-10">
        <h3 className="col-span-1 place-self-center">{index + 1}</h3>
        <div className=" h-full overflow-hidden col-span-3 ">
          <img className="object-fill mx-auto  w-40" src={donor?.image} alt="" />
        </div>
        <h3 className="col-span-2 flex items-center justify-center">{donor?.name}</h3>
        {donor?.designation ? (
          <div className="col-span-2 flex flex-col justify-center">
            <p>CEO</p>
            <p>Navana Corp.</p>
          </div>
        ) : (
          <p className="col-span-2 flex flex-col justify-center">N/A</p>
        )}
        <p className="col-span-2 flex items-center justify-center">${donor?.totalDonation}</p>
        <p className="col-span-2 flex items-center justify-center">{donorBadge}</p>
      </div>
    </div>
  );
};

export default LeaderBoardBar;

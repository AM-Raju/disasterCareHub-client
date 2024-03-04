import Container from "../../layouts/Container";
import "./leaderBoard.css";

import LeaderBoardBar from "../../components/leaderBoard/LeaderBoardBar";

const LeaderBoard = () => {
  return (
    <div className=" relative">
      <div className="leaderBoard-bg mt-24  min-h-[calc(100%-64px)] absolute "></div>

      <Container>
        <div className="min-h-[calc(100vh-64px)] relative  ">
          <div className="  pt-32  overflow-x-scroll lg:overflow-x-hidden">
            <div className=" min-w-[700px] space-y-3 pb-10">
              {/* Heading */}
              <div className="flex relative items-center   border h-10 z-50 group">
                <div className="bg-amber-500 w-full h-full group-hover:blur-sm transition-all duration-300 absolute opacity-60"></div>
                <div className=" w-full h-10 py-2 px-5 grid grid-cols-12 divide-x divide-amber-500 text-center  z-10 bg-white ">
                  <h3 className="col-span-1 ">SN</h3>
                  <h3 className="col-span-3 text-center">Image</h3>
                  <h3 className="col-span-2 place-content-center">Name</h3>
                  <h3 className="col-span-2">Designation</h3>
                  <h3 className="col-span-2">Donation</h3>
                  <h3 className="col-span-2">Badge</h3>
                </div>
              </div>
              {/* LeaderBoard Card */}
              <LeaderBoardBar></LeaderBoardBar>
              <LeaderBoardBar></LeaderBoardBar>
              <LeaderBoardBar></LeaderBoardBar>
              <LeaderBoardBar></LeaderBoardBar>
              <LeaderBoardBar></LeaderBoardBar>
              <LeaderBoardBar></LeaderBoardBar>
              <LeaderBoardBar></LeaderBoardBar>
              <LeaderBoardBar></LeaderBoardBar>
              <LeaderBoardBar></LeaderBoardBar>
              <LeaderBoardBar></LeaderBoardBar>
              <LeaderBoardBar></LeaderBoardBar>
              <LeaderBoardBar></LeaderBoardBar>
              <LeaderBoardBar></LeaderBoardBar>
              <LeaderBoardBar></LeaderBoardBar>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LeaderBoard;

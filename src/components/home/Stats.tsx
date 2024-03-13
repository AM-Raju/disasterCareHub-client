import Container from "../../layouts/Container";

import { motion, useAnimationControls } from "framer-motion";

const Stats = () => {
  const controlStartCardBg1 = useAnimationControls();
  const controlStartCardBg2 = useAnimationControls();
  const controlStartCardBg3 = useAnimationControls();
  const controlStartCardBg4 = useAnimationControls();

  const fillBg1 = () => {
    controlStartCardBg1.start({ x: 0, transition: { duration: 1 } });
  };

  const emptyBg1 = () => {
    controlStartCardBg1.start({ x: -320, transition: { duration: 1 } });
  };

  const fillBg2 = () => {
    controlStartCardBg2.start({ x: 0, transition: { duration: 1 } });
  };
  const emptyBg2 = () => {
    controlStartCardBg2.start({ x: -320, transition: { duration: 1 } });
  };
  const fillBg3 = () => {
    controlStartCardBg3.start({ x: 0, transition: { duration: 1 } });
  };
  const emptyBg3 = () => {
    controlStartCardBg3.start({ x: -320, transition: { duration: 1 } });
  };
  const fillBg4 = () => {
    controlStartCardBg4.start({ x: 0, transition: { duration: 1 } });
  };
  const emptyBg4 = () => {
    controlStartCardBg4.start({ x: -320, transition: { duration: 1 } });
  };

  return (
    <Container>
      <div className=" h-40 grid lg:grid-cols-4 relative bottom-16">
        <div
          onMouseEnter={fillBg1}
          onMouseLeave={emptyBg1}
          className={` border border-amber-500 flex flex-col relative  justify-center items-center py-7  overflow-hidden`}
        >
          <motion.div
            animate={controlStartCardBg1}
            className={` -translate-x-80 w-full h-full "bg-amber-500"
              absolute -z-50`}
          ></motion.div>

          <p className="text-lg mb-2">Foods</p>
          <p className="font-poppins text-4xl font-semibold">
            500
            <span className="font-roboto font-light text-lg"> tons</span>
          </p>
        </div>
        <div
          onMouseEnter={fillBg2}
          onMouseLeave={emptyBg2}
          className="border border-amber-500 flex flex-col relative justify-center items-center py-7  overflow-hidden"
        >
          <motion.div
            animate={controlStartCardBg2}
            className="-translate-x-80 w-full h-full bg-amber-500 absolute -z-50"
          ></motion.div>
          <p className="text-lg mb-2">Shelters</p>
          <p className="font-poppins text-4xl font-semibold">
            1800
            <span className="font-roboto font-light text-lg"> home/tents</span>
          </p>
        </div>
        <div
          onMouseEnter={fillBg3}
          onMouseLeave={emptyBg3}
          className="border border-amber-500 flex flex-col relative justify-center items-center py-7  overflow-hidden"
        >
          <motion.div
            animate={controlStartCardBg3}
            className="-translate-x-80 w-full h-full bg-amber-500 absolute -z-50"
          ></motion.div>
          <p className="text-lg mb-2">Health</p>
          <p className="font-poppins text-4xl font-semibold">
            1M
            <span className="font-roboto font-light text-lg"> persons</span>
          </p>
        </div>
        <div
          onMouseEnter={fillBg4}
          onMouseLeave={emptyBg4}
          className="border border-amber-500 flex flex-col relative justify-center items-center py-7  overflow-hidden"
        >
          <motion.div
            animate={controlStartCardBg4}
            className="-translate-x-80 w-full h-full bg-amber-500 absolute -z-50"
          ></motion.div>
          <p className="text-lg mb-2">Total Cost</p>
          <p className="font-poppins text-4xl font-semibold">$5M</p>
        </div>
      </div>
    </Container>
  );
};

export default Stats;

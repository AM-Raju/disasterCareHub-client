import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Banner = () => {
  const textEffect = {
    initial: { scale: 0.2 },
    animate: {
      scale: 1,
      transition: { duration: 2, type: "spring", stiffness: 100 },
    },
  };

  const movingBarLeft = {
    initial: {
      x: 10,
    },
    animate: {
      x: -10,
      transition: {
        x: {
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };

  const movingBarRight = {
    initial: {
      x: -10,
    },
    animate: {
      x: 10,
      transition: {
        x: {
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <div
      className="h-[70vh] lg:h-screen "
      style={{ backgroundImage: `url(${"https://i.ibb.co/0qfpdFb/banner.jpg"})` }}
    >
      <div className="flex justify-center items-center h-full w-full bg-gradient-to-t from-black/60 overflow-x-auto">
        <div>
          <div className="flex items-baseline justify-evenly gap-4">
            <motion.div
              variants={movingBarLeft}
              initial="initial"
              animate="animate"
              className="h-0.5 w-36 lg:w-72 bg-white"
            ></motion.div>
            <motion.p
              variants={textEffect}
              initial="initial"
              animate="animate"
              className=" text-3xl text-white text-center w-52"
            >
              Restore Hopes
            </motion.p>
            <motion.div
              variants={movingBarRight}
              initial="initial"
              animate="animate"
              className="h-0.5 w-36 lg:w-72 bg-white"
            ></motion.div>
          </div>
          <motion.h1
            variants={textEffect}
            initial="initial"
            animate="animate"
            className="text-amber-500 text-4xl text-center lg:text-8xl font-poppins font-extrabold mt-5"
          >
            Through Actions
          </motion.h1>
        </div>
      </div>

      <div className="relative -top-40 w-full h-52 max-w-7xl mx-auto grid grid-cols-12 ">
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="col-span-12 lg:col-span-4 h-full bg-cyan-500 flex justify-center items-center"
        >
          <h2 className="text-3xl  font-roboto tracking-wider ">Early Response</h2>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="col-span-12 lg:col-span-4 h-full bg-amber-500 flex justify-center items-center"
        >
          <h2 className="text-3xl  font-roboto tracking-wider ">Enormous Supplies</h2>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="col-span-12 lg:col-span-4 h-full bg-purple-500 flex justify-center items-center"
        >
          <h2 className="text-3xl  font-roboto tracking-wider ">Timely Distribution</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;

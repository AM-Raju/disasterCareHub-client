import Banner from "../components/home/Banner";
import SupplyPosts from "../components/home/SupplyPosts";
import Testimonial from "../components/home/Testimonial";
import Gallery from "../components/home/Gallery";

import Stats from "../components/home/Stats";
import Faq from "../components/home/Faq";
import About from "../components/home/About";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SupplyPosts></SupplyPosts>
      <Testimonial></Testimonial>
      <Gallery></Gallery>
      <About></About>
      <Stats></Stats>
      <Faq></Faq>
    </div>
  );
};

export default Home;

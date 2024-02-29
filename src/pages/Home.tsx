import Banner from "../components/home/Banner";
import SupplyPosts from "../components/home/SupplyPosts";
import Testimonial from "../components/home/Testimonial";
import Gallery from "../components/home/Gallery";
import AboutUs from "../components/home/AboutUs";
import Stats from "../components/home/Stats";
import Faq from "../components/home/Faq";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SupplyPosts></SupplyPosts>
      <Testimonial></Testimonial>
      <Gallery></Gallery>
      <AboutUs></AboutUs>
      <Stats></Stats>
      <Faq></Faq>
    </div>
  );
};

export default Home;

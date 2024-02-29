import Container from "../../layouts/Container";
import { FaFacebookF, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="lg:h-16 bg-gray-800 ">
      <Container>
        <div className="flex flex-col lg:flex-row py-5 items-center justify-between lg:h-16 text-white gap-3">
          {/* Social Icon */}
          <div className="flex  items-center h-full gap-3">
            <FaFacebookF className="size-5 hover:scale-125 transition-all duration-500" />
            <FaXTwitter className="size-5 hover:scale-125 transition-all duration-500" />
            <FaInstagram className="size-5 hover:scale-125 transition-all duration-500" />
            <FaLinkedin className="size-5 hover:scale-125 transition-all duration-500" />
          </div>
          <div>&copy;Disaster Care Hub</div>
          {/* Links */}
          <div className="space-x-3">
            <Link to="#">Home</Link>
            <Link to="#">About Us</Link>
            <Link to="#">Contact</Link>
            <Link to="#">Privacy Policy</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

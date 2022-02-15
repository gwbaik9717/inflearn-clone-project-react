import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Solids from "@fortawesome/free-solid-svg-icons";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import SnsIcon from "./SnsIcon";

const FooterBottomRight = () => {
  const snses = [
    { id: "naver", icon: <FontAwesomeIcon icon={Solids.faN} /> },
    { id: "naver-blog", icon: <FontAwesomeIcon icon={Solids.faB} /> },
    { id: "instagram", icon: <FontAwesomeIcon icon={Brands.faInstagram} /> },
    { id: "youtube", icon: <FontAwesomeIcon icon={Brands.faYoutube} /> },
    { id: "facebook", icon: <FontAwesomeIcon icon={Brands.faFacebook} /> },
  ];

  return (
    <div className="footer-bottom-right">
      {snses.map(({ id, icon }) => (
        <SnsIcon key={id} id={id} icon={icon} />
      ))}
    </div>
  );
};

export default FooterBottomRight;

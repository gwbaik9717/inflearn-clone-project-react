import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Solids from "@fortawesome/free-solid-svg-icons";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const StyledBottomRight = styled.div`
  margin-left: 20px;
  width: 210px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    width: 34px;
    height: 34px;
    border-radius: 100%;
    background-color: #bdbdbd;
    text-align: center;
    line-height: 34px;
    font-weight: 700;
  }
`;

const FooterBottomRight = () => {
  const snses = [
    { id: "naver", icon: <FontAwesomeIcon icon={Solids.faN} /> },
    { id: "naver-blog", icon: <FontAwesomeIcon icon={Solids.faB} /> },
    { id: "instagram", icon: <FontAwesomeIcon icon={Brands.faInstagram} /> },
    { id: "youtube", icon: <FontAwesomeIcon icon={Brands.faYoutube} /> },
    { id: "facebook", icon: <FontAwesomeIcon icon={Brands.faFacebook} /> },
  ];

  return (
    <StyledBottomRight className="footer-bottom-right">
      {snses.map(({ id, icon }) => (
        <a href="#" id={id}>
          {icon}
        </a>
      ))}
    </StyledBottomRight>
  );
};

export default FooterBottomRight;

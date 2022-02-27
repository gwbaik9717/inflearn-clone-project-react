import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const StyledBannerRight = styled.div`
  height: 100%;
  width: 737px;
  position: absolute;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;

  img {
    object-fit: cover;
    height: 100%;
    object-position: left;
  }

  @media (max-width: 1365px) {
    width: 55%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;

    img {
      width: 100%;
      height: 100%;
      object-position: center;
    }
  }
`;

const BannerRight = ({ mobileImg, img, alt }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <StyledBannerRight className="banner-right">
      <img src={isMobile ? mobileImg : img} alt={alt} />
    </StyledBannerRight>
  );
};

export default BannerRight;

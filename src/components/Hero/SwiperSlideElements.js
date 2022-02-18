import BannerLeft from "./BannerLeft";
import BannerRight from "./BannerRight";
import styled from "styled-components";

const StyledBanner = styled.div`
  background-color: #153a55;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  .container {
    height: 100%;
  }
`;

const SwiperSlideElements = ({ title, tags, details, img, bgColor }) => {
  return (
    <StyledBanner className="banner-bg">
      <div className="container">
        <BannerLeft title={title} tags={tags} details={details} />
        <BannerRight img={img} alt={title} />
      </div>
    </StyledBanner>
  );
};

export default SwiperSlideElements;

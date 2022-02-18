import styled from "styled-components";

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
`;

const BannerRight = ({ img, alt }) => {
  return (
    <StyledBannerRight className="banner-right">
      <img src={img} alt={alt} />
    </StyledBannerRight>
  );
};

export default BannerRight;

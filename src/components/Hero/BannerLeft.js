import BannerTag from "./BannerTag";
import styled from "styled-components";

const StyledBannerLeft = styled.div`
  position: absolute;
  top: 44%;
  left: 10px;
  transform: translateY(-50%);
  max-width: 400px;

  .banner-title {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 8px;
  }

  .banner-details {
    color: white;
  }
`;

const BannerLeft = ({ title, tags, details }) => {
  return (
    <StyledBannerLeft className="banner-left">
      {tags.map((tag) => (
        <BannerTag key={tag} tag={tag} />
      ))}

      <h1 className="banner-title title">{title}</h1>
      <p className="banner-details">{details}</p>
    </StyledBannerLeft>
  );
};

export default BannerLeft;

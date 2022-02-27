import BannerTag from "./BannerTag";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const StyledBannerLeft = styled.div`
  position: absolute;
  top: 44%;
  left: 10px;
  transform: translateY(-50%);
  max-width: 600px;
  width: 45%;

  .banner-tags {
    display: flex;
    margin-bottom: 1rem;
    cursor: pointer;
  }

  .banner-title {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 8px;
  }

  .banner-details {
    color: white;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    left: unset;
    top: unset;
    bottom: 0;
    transform: none;
    max-width: unset;
    width: 100%;
    height: 174px;
    z-index: 3;
    background: linear-gradient(
      to bottom,
      rgba(21, 58, 85, 0),
      rgba(21, 58, 85, 0.47) 69%,
      #153a55 100%
    );

    .banner-tags {
      padding-left: 20px;
      padding-bottom: 4px;
      margin-bottom: 0;
    }

    .banner-title {
      font-size: 18px;
      padding-left: 20px;
      margin-bottom: 1rem;
    }

    .banner-details {
      padding-left: 20px;
      margin-bottom: 1rem;
      font-size: 18px;

      font-weight: 600;
    }
  }
`;

const BannerLeft = ({ title, tags, details1, details2 }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <StyledBannerLeft className="banner-left">
      <div className="banner-tags">
        {tags.map((tag) => (
          <BannerTag key={tag} tag={tag} />
        ))}
      </div>

      <h1 className="banner-title title">{title}</h1>

      {!isMobile && (
        <p className="banner-details">
          {details1} <br /> {details2}
        </p>
      )}
    </StyledBannerLeft>
  );
};

export default BannerLeft;

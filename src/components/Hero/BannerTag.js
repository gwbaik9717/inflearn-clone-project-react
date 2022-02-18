import styled from "styled-components";

const StyledBannerTag = styled.div`
  display: inline-flex;
  margin-bottom: 16px;
  justify-content: flex-start;
  align-items: center;
  color: #000;
  margin-right: 6px;

  span {
    background-color: #48ff1d;
    padding: 0 10px;
    font-size: 0.825rem;
    font-weight: 700;
    border-radius: 4px;
  }
`;

const BannerTag = ({ tag }) => {
  return (
    <StyledBannerTag className="banner-tags">
      <span>{tag}</span>
    </StyledBannerTag>
  );
};

export default BannerTag;

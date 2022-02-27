import styled from "styled-components";

const StyledBannerTag = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  color: #000;
  margin-right: 6px;
  background-color: #48ff1d;
  padding: 0 10px;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 4px;
  height: 24px;

  @media (max-width: 768px) {
    height: 22px;
    line-height: 22px;
    font-size: 0.75rem;
  }
`;

const BannerTag = ({ tag }) => {
  return <StyledBannerTag className="banner-tag">{tag}</StyledBannerTag>;
};

export default BannerTag;

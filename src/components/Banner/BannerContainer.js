import styled from "styled-components";

const StyledBackground = styled.div`
  background-image: url(${(props) => props.bgImg});
`;

const StyledContainer = styled.div`
  padding: 0 10px;
`;

const StyledBannerTitle = styled.div`
  font-weight: 400;
  margin-bottom: 16px;
  font-size: 1.125rem;
  color: ${(props) => props.titleColor};
`;

const StyledBtn = styled.a`
  display: inline-flex;
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  color: rgb(29, 192, 120);
  font-size: 1rem;
  font-weight: 700;
  padding: 12px 16px;
`;

const BannerContainer = ({ title1, title2, titleColor, btnText, bgImg }) => {
  return (
    <StyledBackground bgImg={bgImg}>
      <StyledContainer className="container">
        <StyledBannerTitle titleColor={titleColor} className="banner-title">
          <h3>
            {title1}
            <br />
            {title2}
          </h3>
        </StyledBannerTitle>

        <StyledBtn href="#" className="btn">
          {btnText}
        </StyledBtn>
      </StyledContainer>
    </StyledBackground>
  );
};

export default BannerContainer;

import styled from "styled-components";
import RoadmapMainHeader from "./RoadmapMainHeader";
import RoadmapMainLeft from "./RoadmapMainLeft";
import RoadmapMainRight from "./RoadmapMainRight";

const StyledContainer = styled.div`
  padding: 24px 1rem;
  max-width: 1440px !important;
  margin: auto;

  .main-panel {
    margin-top: 16px;
    width: 100%;
    display: flex;
  }
`;

const RoadmapMain = () => {
  return (
    <StyledContainer className="container">
      <div className="content-wrapper">
        <RoadmapMainHeader />

        <div className="main-panel">
          <RoadmapMainLeft />
          <RoadmapMainRight />
        </div>
      </div>
    </StyledContainer>
  );
};

export default RoadmapMain;

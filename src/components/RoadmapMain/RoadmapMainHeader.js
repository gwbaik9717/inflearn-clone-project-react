import styled from "styled-components";
import RoadmapMainHeaderLeft from "./RoadmapMainHeaderLeft";
import RoadmapMainHeaderRight from "./RoadmapMainHeaderRight";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 0 12px;
`;

const RoadmapMainHeader = () => {
  return (
    <StyledHeader className="roadmap-header">
      {/*<RoadmapMainHeaderLeft />*/}
      <div></div>
      <RoadmapMainHeaderRight />
    </StyledHeader>
  );
};

export default RoadmapMainHeader;

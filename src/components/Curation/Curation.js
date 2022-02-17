import CurationHeader from "./CurationHeader";
import CurationContent from "./CurationContent";
import styled from "styled-components";

const StyledCuration = styled.section`
  padding: 24px 0;
`;

const StyledContainer = styled.div`
  padding: 0 10px;
`;

const Category = () => {
  return (
    <StyledCuration className="Curation slider">
      <StyledContainer className="container">
        <CurationHeader />
        <CurationContent />
      </StyledContainer>
    </StyledCuration>
  );
};

export default Category;

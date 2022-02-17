import CurationHeader from "./CurationHeader";
import CurationContent from "./CurationContent";
import styled from "styled-components";

const StyledCuration = styled.section`
  padding: 24px 0;

  .container {
    padding: 0 10px;
  }
`;

const Category = () => {
  return (
    <StyledCuration className="Curation slider">
      <div className="container">
        <CurationHeader />
        <CurationContent />
      </div>
    </StyledCuration>
  );
};

export default Category;

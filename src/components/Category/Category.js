import CoursesHeader from "../Courses/CoursesHeader";
import CategoryContent from "./CategoryContent";
import styled from "styled-components";

const StyledCategory = styled.section`
  padding: 24px 0;
`;

const StyledContainer = styled.div`
  padding: 0 10px;
`;

const Category = ({ title }) => {
  return (
    <StyledCategory className="category slider">
      <StyledContainer className="container">
        <CoursesHeader title={title} />
        <CategoryContent />
      </StyledContainer>
    </StyledCategory>
  );
};

export default Category;

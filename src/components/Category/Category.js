import CoursesHeader from "../Courses/CoursesHeader";
import CategoryContent from "./CategoryContent";
import styled from "styled-components";

const StyledCategory = styled.section`
  padding: 24px 0;

  .container {
    padding: 0 10px;
  }
`;

const Category = ({ title }) => {
  return (
    <StyledCategory className="category slider">
      <div className="container">
        <CoursesHeader title={title} />
        <CategoryContent />
      </div>
    </StyledCategory>
  );
};

export default Category;

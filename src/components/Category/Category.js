import CoursesHeader from "../Courses/CoursesHeader";
import CategoryContent from "./CategoryContent";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import CategoryTags from "./CategoryTags";

const StyledCategory = styled.section`
  padding: 24px 0;

  .container {
    padding: 0 10px;
    overflow: hidden;
  }
`;

const Category = ({ title }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const categories = [
    { title: "보안", backgroundPosition: "-154px -154px" },
    { title: "모바일", backgroundPosition: "-82px -82px" },
    { title: "알고리즘", backgroundPosition: "-10px -226px" },
    { title: "웹개발", backgroundPosition: "-82px -10px" },
    { title: "업무 스킬", backgroundPosition: "-154px -82px" },
    { title: "자바스크립트", backgroundPosition: "-82px -154px" },
    { title: "자바", backgroundPosition: "-226px -82px" },
  ];

  return (
    <StyledCategory className="category slider">
      <div className="container">
        <CoursesHeader title={title} />
        {isMobile ? (
          <CategoryTags categories={categories} />
        ) : (
          <CategoryContent categories={categories} />
        )}
      </div>
    </StyledCategory>
  );
};

export default Category;

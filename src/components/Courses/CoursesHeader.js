import styled from "styled-components";

const StyledTitle = styled.h2`
  color: #1e1e1e;
  font-size: 1.5rem;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

const CoursesHeader = ({ title }) => {
  return (
    <div className="courses-header">
      <StyledTitle className="title">{title}</StyledTitle>
    </div>
  );
};

export default CoursesHeader;

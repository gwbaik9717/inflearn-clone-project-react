import styled from "styled-components";

const StyledTag = styled.span`
  background-color: hsl(321, 63%, 90%);
`;

const CourseTag = ({ tag }) => {
  return <StyledTag className="tag">{tag}</StyledTag>;
};

export default CourseTag;

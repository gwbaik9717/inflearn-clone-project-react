import styled from "styled-components";

const StyledTag = styled.span`
  background-color: hsl(321, 63%, 90%);

  @media (max-width: 768px) {
    font-size: 0.625rem !important;
  }
`;

const CourseTag = ({ tag }) => {
  return <StyledTag className="tag">{tag}</StyledTag>;
};

export default CourseTag;

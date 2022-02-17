import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";

const StyledSpan = styled.span`
  padding: 0 5px;
  color: #1dc078 !important;
`;

const StyledTitle = styled.h2`
  color: #1e1e1e;
  font-size: 1.5rem;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

const CoursesHeaderWithID = ({ id }) => {
  return (
    <div className="courses-header">
      <a href="#">
        <StyledTitle className="title">
          내가 학습한
          <StyledSpan className="text-colored">{id}</StyledSpan>
          분야 인기 강의
          <span className="icon">
            <FontAwesomeIcon icon={All.faChevronRight} />
          </span>
        </StyledTitle>
      </a>
    </div>
  );
};

export default CoursesHeaderWithID;

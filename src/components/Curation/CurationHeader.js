import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.div`
  margin-bottom: 16px;
`;

const StyledTitle = styled.h2`
  color: #1e1e1e;
  font-size: 1.5rem;
  line-height: 1.5;
`;

const StyledIcon = styled.span`
  width: 1rem;
  height: 1rem;
  line-height: 1;
  font-size: 1rem;
  display: inline;
  margin-left: 10px;
`;

const CurationHeader = () => {
  return (
    <StyledHeader className="header">
      <a href="#">
        <StyledTitle className="title">
          읽어보기
          <StyledIcon className="icon">
            <FontAwesomeIcon icon={All.faChevronRight} />
          </StyledIcon>
        </StyledTitle>
      </a>
    </StyledHeader>
  );
};

export default CurationHeader;

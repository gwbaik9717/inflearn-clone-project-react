import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.div`
  margin-bottom: 16px;

  .title {
    color: #1e1e1e;
    font-size: 1.5rem;
    line-height: 1.5;
  }

  .icon {
    width: 1rem;
    height: 1rem;
    line-height: 1;
    font-size: 1rem;
    display: inline;
    margin-left: 10px;
  }
`;

const CurationHeader = () => {
  return (
    <StyledHeader className="header">
      <a href="#">
        <h2 className="title">
          읽어보기
          <span className="icon">
            <FontAwesomeIcon icon={All.faChevronRight} />
          </span>
        </h2>
      </a>
    </StyledHeader>
  );
};

export default CurationHeader;

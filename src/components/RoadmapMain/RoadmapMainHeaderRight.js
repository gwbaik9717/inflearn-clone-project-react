import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";

const StyledButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .buttons-container {
    height: 35.5px;
  }

  button {
    color: #929292;
    background-color: #fff;
    font-size: 1.5rem;
    width: 24px;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: 0;
  }

  .is-selected {
    margin-left: 16px;
    width: 21px;
    opacity: 0.3;
  }
`;

const RoadmapMainHeaderRight = () => {
  return (
    <div className="header-right">
      <StyledButtons className="sort-buttons">
        <div className="buttons-container">
          <button>
            <span className="icon">
              <FontAwesomeIcon icon={All.faBorderAll} />
            </span>
          </button>
          <button className="is-selected">
            <span className="icon">
              <FontAwesomeIcon icon={All.faBars} />
            </span>
          </button>
        </div>
      </StyledButtons>
    </div>
  );
};

export default RoadmapMainHeaderRight;

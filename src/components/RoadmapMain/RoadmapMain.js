import styled from "styled-components";
import RoadmapMainLeft from "./RoadmapMainLeft";
import RoadmapMainRight from "./RoadmapMainRight";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
  padding: 0 12px;
`;

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
    opacity: 0.3;
  }

  button:last-child {
    margin-left: 16px;
    width: 21px;
  }

  .is-selected {
    opacity: 1;
  }
`;

const StyledContainer = styled.div`
  padding: 24px 1rem;
  max-width: 1440px !important;
  margin: auto;

  .main-panel {
    margin-top: 16px;
    width: 100%;
    display: flex;
  }
`;

const RoadmapMain = () => {
  const [isGrid, setIsGrid] = useState(true);
  const ViewToList = () => {
    setIsGrid(false);
  };
  const ViewToGrid = () => {
    setIsGrid(true);
  };

  return (
    <StyledContainer className="container">
      <div className="content-wrapper">
        <StyledHeader className="roadmap-header">
          {/*<RoadmapMainHeaderLeft />*/}

          <div className="header-right">
            <StyledButtons className="sort-buttons">
              <div className="buttons-container">
                <button
                  className={isGrid ? "is-selected" : null}
                  onClick={ViewToGrid}
                >
                  <span className="icon">
                    <FontAwesomeIcon icon={All.faBorderAll} />
                  </span>
                </button>
                <button
                  className={isGrid ? null : "is-selected"}
                  onClick={ViewToList}
                >
                  <span className="icon">
                    <FontAwesomeIcon icon={All.faBars} />
                  </span>
                </button>
              </div>
            </StyledButtons>
          </div>
        </StyledHeader>

        <div className="main-panel">
          <RoadmapMainLeft />
          <RoadmapMainRight isGrid={isGrid} />
        </div>
      </div>
    </StyledContainer>
  );
};

export default RoadmapMain;

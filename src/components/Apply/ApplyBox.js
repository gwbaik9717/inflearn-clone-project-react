import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledBox = styled.div`
  margin: 2px 2px 2px ${({ index }) => (index ? "8px" : "2px")};
  padding: 48px;
  width: 380px;
  height: 330px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);

  .box-title {
    margin-bottom: 8px;
    font-size: 1.125rem;
    font-weight: 600;
    color: #363636;
    line-height: 1.125;
  }

  .box-detail {
    width: 100%;
    color: #757575;
    font-size: 1rem;
  }

  .btn {
    font-weight: 700;
    background-color: #1dc078;
    color: #fff;
    margin-top: auto;
    padding: 12px 16px;
  }

  .icon {
    margin-left: 4px;
    width: 1rem;
    height: 1rem;
    font-size: 12px;
  }
`;

const ApplyBox = ({ title, desc1, desc2, btn, index }) => {
  return (
    <StyledBox index={index} className="box">
      <h3 className="box-title">{title}</h3>
      <div className="box-detail">
        {desc1}
        <br />
        {desc2}
      </div>
      <a href="#" className="btn is-rounded">
        <span>{btn}</span>
        <span className="icon">
          <FontAwesomeIcon icon={All.faArrowRight} />
        </span>
      </a>
    </StyledBox>
  );
};

export default ApplyBox;

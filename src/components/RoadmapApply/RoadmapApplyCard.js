import styled from "styled-components";

const StyledApplyCard = styled.div`
  text-align: center;

  .apply-title {
    font-size: 24px;
    color: #333;
    margin-bottom: 8px;
  }

  .apply-detail {
    font-size: 16px;
    font-weight: 400;
    color: #333;
    margin-bottom: 24px;
  }

  .btn {
    display: inline-flex;
    color: #fff;
    background-color: #1dc078;
    font-size: 20px;
    border-radius: 2px;
    padding: 8px 16px;
    line-height: 1.5;
  }

  @media (max-width: 7698px) {
    .apply-title {
      display: none;
    }

    .apply-detail {
      display: none;
    }
  }
`;

const RoadmapApplyCard = ({ title, detail1, detail2, btn }) => {
  return (
    <StyledApplyCard className="apply-card">
      <div className="apply-title">{title}</div>
      <div className="apply-detail">
        {detail1}
        <br />
        {detail2}
      </div>
      <a href="#" className="btn">
        {btn}
      </a>
    </StyledApplyCard>
  );
};

export default RoadmapApplyCard;

import styled from "styled-components";

const StyledSelect = styled.div`
  margin-left: 20px;
  height: 2.25em;
  width: 93.5px;

  select {
    height: 100%;
    color: #333;
    font-size: 1rem;
    border: 0;
    background-color: #fff;
    padding: 5px 40px 5px 9px;
  }
`;

const RoadmapHeroSelect = () => {
  return (
    <StyledSelect className="select">
      <select>
        <option value="title">제목</option>
        <option value="title">본문</option>
        <option value="title">작성자</option>
      </select>
    </StyledSelect>
  );
};

export default RoadmapHeroSelect;

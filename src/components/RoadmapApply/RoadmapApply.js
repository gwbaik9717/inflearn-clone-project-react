import styled from "styled-components";
import RoadmapApplyCard from "./RoadmapApplyCard";

const StyledApply = styled.section`
  background-color: #f3f4f7;
  width: 100%;

  .wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    padding: 96px 0;
    max-width: 1152px;
  }
`;

const RoadmapApply = () => {
  const datas = [
    {
      title: "지식공유자 되기",
      detail1: "많은 사람들에게 배움의 기회를 주고,",
      detail2: "경제적 보상을 받아보세요.",
      btn: "지식공유참여",
    },
    {
      title: "기업 교육을 위한 인프런",
      detail1: "인프런 비즈니스” 를 통해 모든 팀원이 인프런의 강의를",
      detail2: "자유롭게 학습하는 환경을 제공하세요.",
      btn: "인프런 비즈니스",
    },
  ];
  return (
    <StyledApply className="apply">
      <div className="wrapper">
        {datas.map(({ title, detail1, detail2, btn }) => (
          <RoadmapApplyCard
            key={title}
            title={title}
            detail1={detail1}
            detail2={detail2}
            btn={btn}
          />
        ))}
      </div>
    </StyledApply>
  );
};

export default RoadmapApply;

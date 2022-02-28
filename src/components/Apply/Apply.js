import styled from "styled-components";
import ApplyBox from "./ApplyBox";

const StyledApply = styled.section`
  padding: 48px 0;
  background-color: #f9f9f9;

  .container {
    padding: 0 10px;
  }

  .header {
    margin-bottom: 20px;
  }

  .title {
    color: #1e1e1e;
    font-size: 1.5rem;
    line-height: 1.5;
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }

  p {
    color: #757575;
    font-size: 0.9375rem;
  }

  .apply-container {
    overflow-x: auto;
  }

  .apply-container::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  .apply-wrapper {
    display: inline-flex;
    justify-content: space-between;
    min-width: 100%;
  }

  @media (max-width: 1024px) {
    .apply-wrapper {
      justify-content: flex-start;
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1rem;
    }
  }
`;

const Apply = () => {
  const datas = [
    {
      title: "지식공유자 되기",
      desc1: "9개월간 온라인 기술 강의로만 1억원!",
      desc2:
        "나의 지식을 나눠 사람들에게 배움의 기회를 주고, 의미있는 대가를 가져가세요.",
      btn: "지식공유자 참여하기",
    },
    {
      title: "인프런 비즈니스 신청",
      desc1:
        "모든 팀원의 인프런의 강의들을 자유롭게 학습하는 환경을 제공해주세요.",
      desc2:
        "업무 스킬에 집중된 콘텐츠를 통해 최신 트렌드의 업무역량을 습득할 수 있습니다.",
      btn: "비즈니스 신청하기",
    },
    {
      title: "인프런 X 대학생",
      desc1: "학교와 인프런이 함께 하여,",
      desc2:
        "많은 학생 분들께 정해진 커리큘럼 이외에도 필요한 학습을 보완하고, 더욱 성장할 수 있도록 도와드립니다.",
      btn: "대학생 신청하기",
    },
  ];

  return (
    <StyledApply className="apply">
      <div className="container">
        <div className="header">
          <h2 className="title">다양한 서비스를 신청하세요.</h2>
          <p className="apply-detail">
            인프런의 지식공유자 ˙ 비즈니스 ˙ 대학생 신청방법에 대해 알아보세요.
          </p>
        </div>

        <div className="apply-container">
          <div className="apply-wrapper">
            {datas.map(({ title, desc1, desc2, btn }, index) => (
              <ApplyBox
                key={title}
                title={title}
                desc1={desc1}
                desc2={desc2}
                btn={btn}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </StyledApply>
  );
};

export default Apply;

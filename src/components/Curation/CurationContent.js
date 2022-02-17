import CurationCard from "./CurationCard";
import styled from "styled-components";

const StyledContainer = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
`;

const StyledWrapper = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  min-width: 100%;
`;

const CurationContent = () => {
  const data = [
    {
      title: "(추가 혜택 안내) 2022년, 인프런이 준비했어흥",
      img: "https://cdn.inflearn.com/public/files/pages/49b910dd-44ce-4f50-a673-4a05bd83d37a/start2022_blog.gif",
      desc: "🎁 아래 토글을 클릭하여 추가 특별 혜택에 대한 안내를 확인해주세요!",
    },
    {
      title: "[주간 인프런 #41] 개발자의 공유 문화 이모저모 (2) 회고 문화",
      img: "https://cdn.inflearn.com/public/files/pages/624b42d8-9c23-4ba4-ade8-e5b6906109ea/[이벤트]2월_2022지공전당_김영한_blog_b.png",
      desc: "안녕하세요. 인프런입니다.'2022년, 인프런이 준비했어흥' 이벤트에많은 분이 찾아와주시고",
    },
    {
      title: "인프런이 사랑받는 특별한 이유는 뭘까? (종료)",
      img: "https://cdn.inflearn.com/public/files/pages/624b42d8-9c23-4ba4-ade8-e5b6906109ea/[이벤트]2월_2022지공전당_김영한_blog_b.png",
      desc: "🎁 아래 토글을 클릭하여 추가 특별 혜택에 대한 안내를 확인해주세요!",
    },
  ];

  return (
    <div className="content">
      <StyledContainer className="curation-container">
        <StyledWrapper className="curation-wrapper">
          {data.map(({ title, img, desc }, index) => (
            <CurationCard
              key={title}
              title={title}
              img={img}
              desc={desc}
              index={index}
            />
          ))}
        </StyledWrapper>
      </StyledContainer>
    </div>
  );
};

export default CurationContent;

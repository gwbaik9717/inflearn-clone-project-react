import styled from "styled-components";
import RoadmapCard from "./RoadmapCard";
import RoadmapMainPagination from "./RoadmapMainPagination";

const StyledPanel = styled.div`
  width: 100%;

  .panel-right-container {
    padding-left: 24px;
    margin-top: -0.75rem;
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 12px;
  }

  .card-container {
    width: calc(100% / 3);
    padding: 0.75rem;
  }
`;

const RoadmapMainRight = () => {
  const datas = [
    {
      title: `[입문~활용] 기초부터 응용까지, 한 방에 끝내는
    파이썬 (Inflearn Original)`,
      author: "인프런",
      img: "https://cdn.inflearn.com/public/roadmaps/e65b9afb-399e-49b5-9c0c-06d061da480a/roadmap-145.png",
    },
    {
      title: `Vue.js와 TypeScript로 정복하는 프론트엔드 개발`,
      author: "인프런",
      img: "https://cdn.inflearn.com/public/roadmaps/466/cover/573a04e1-5309-4184-8277-95de50ceabf2/roadmap-152.png",
    },
    {
      title: `[입문~활용] 기초부터 응용까지, 한 방에 끝내는
      파이썬 (Inflearn Original)`,
      author: "인프런",
      img: "https://cdn.inflearn.com/public/roadmaps/e65b9afb-399e-49b5-9c0c-06d061da480a/roadmap-145.png",
    },
    {
      title: `코딩 해볼래요? - 하루 11분, 60일 완성 코딩 왕초보 탈출부터 활용까지!`,
      author: "인프런",
      img: "https://cdn.inflearn.com/public/roadmaps/fa1e0dbf-1786-4d81-bd22-d412b7937500/roadmap-77.png",
    },
    {
      title: `Spring Boot & Spring Cloud 마이크로서비스 애플리케이션 개발 (MSA)`,
      author: "인프런",
      img: "https://cdn.inflearn.com/public/roadmaps/4315786e-a2a7-44ec-8da7-dec95dc4723e/roadmap-140.png",
    },
    {
      title: `3D 모델링, 입문부터 취업까지! (3dsmax + ZBrush)`,
      author: "인프런",
      img: "https://cdn.inflearn.com/public/roadmaps/e43ba925-8d00-41b0-bc92-685418585d1b/roadmap-78.png",
    },
    {
      title: `프로그래밍 시작하기 - 파이썬 입문부터 인공지능, 머신러닝까지`,
      author: "인프런",
      img: "https://cdn.inflearn.com/public/roadmaps/270f825f-69b8-4afe-ac7d-4ed76cbce70f/roadmap-66.png",
    },
    {
      title: `코딩테스트 최적화 로드맵 🕵`,
      author: "인프런",
      img: "https://cdn.inflearn.com/public/roadmaps/daab306d-fbde-429f-ba4b-313e2d4e06b7/roadmap-54-2.png",
    },
    {
      title: `뼈문과를 위한 현실 데이터 분석 - 파이썬`,
      author: "인프런",
      img: "https://cdn.inflearn.com/public/roadmaps/99292f79-bcb8-49d6-9d93-1b992340239b/roadmap-33.png",
    },
    {
      title: `우아한형제들 백엔드 개발자 취업 로드맵`,
      author: "인프런",
      img: "https://cdn.inflearn.com/public/roadmaps/f992d012-594e-4291-aba6-cf60554e063a/roadmap-21.png",
    },
  ];

  return (
    <StyledPanel className="panel-right">
      <div className="panel-right-container">
        <div className="cards-container">
          {datas.map(({ title, author, img }) => (
            <RoadmapCard key={title} title={title} author={author} img={img} />
          ))}
        </div>

        <RoadmapMainPagination />
      </div>
    </StyledPanel>
  );
};

export default RoadmapMainRight;

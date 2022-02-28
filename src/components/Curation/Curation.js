import CurationHeader from "./CurationHeader";
import CurationCard from "./CurationCard";
import styled from "styled-components";

const StyledCuration = styled.section`
  padding: 24px 0;

  .container {
    padding: 0 10px;
  }

  .curation-container {
    overflow-x: auto;
    overflow-y: hidden;
  }

  .curation-container::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  .curation-wrapper {
    display: inline-flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    min-width: 100%;
    width: 1311.01px;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1rem;
    }

    .curation-wrapper {
      width: 866px;
    }
  }
`;

const Category = () => {
  const data = [
    {
      title: "(추가 혜택 안내) 2022년, 인프런이 준비했어흥",
      img: "https://cdn.inflearn.com/public/files/pages/49b910dd-44ce-4f50-a673-4a05bd83d37a/start2022_blog.gif",
      desc: "🎁 아래 토글을 클릭하여 추가 특별 혜택에 대한 안내를 확인해주세요! 안녕하세요. 인프런입니다.'2022년, 인프런이 준비했어흥' 이벤트에많은 분이 찾아와주시고 안녕하세요. 인프런입니다.'2022년, 인프런이 준비했어흥' 이벤트에많은 분이 찾아와주시고 안녕하세요. 인프런입니다.'2022년, 인프런이 준비했어흥' 이벤트에많은 분이 찾아와주시고",
    },
    {
      title: "[주간 인프런 #41] 개발자의 공유 문화 이모저모 (2) 회고 문화",
      img: "https://cdn.inflearn.com/public/files/pages/624b42d8-9c23-4ba4-ade8-e5b6906109ea/[이벤트]2월_2022지공전당_김영한_blog_b.png",
      desc: "안녕하세요. 인프런입니다.'2022년, 인프런이 준비했어흥' 이벤트에많은 분이 찾아와주시고 안녕하세요. 인프런입니다.'2022년, 인프런이 준비했어흥' 이벤트에많은 분이 찾아와주시고 안녕하세요. 인프런입니다.'2022년, 인프런이 준비했어흥' 이벤트에많은 분이 찾아와주시고 안녕하세요. 인프런입니다.'2022년, 인프런이 준비했어흥' 이벤트에많은 분이 찾아와주시고 안녕하세요. 인프런입니다.'2022년, 인프런이 준비했어흥' 이벤트에많은 분이 찾아와주시고",
    },
    {
      title: "인프런이 사랑받는 특별한 이유는 뭘까? (종료)",
      img: "https://cdn.inflearn.com/public/files/pages/624b42d8-9c23-4ba4-ade8-e5b6906109ea/[이벤트]2월_2022지공전당_김영한_blog_b.png",
      desc: "🎁 아래 토글을 클릭하여 추가 특별 혜택에 대한 안내를 확인해주세요! 안녕하세요. 인프런입니다.'2022년, 인프런이 준비했어흥' 이벤트에많은 분이 찾아와주시고 안녕하세요. 인프런입니다.'2022년, 인프런이 준비했어흥' 이벤트에많은 분이 찾아와주시고 안녕하세요. 인프런입니다.'2022년, 인프런이 준비했어흥' 이벤트에많은 분이 찾아와주시고",
    },
  ];

  return (
    <StyledCuration className="Curation slider">
      <div className="container">
        <CurationHeader />
        <div className="content">
          <div className="curation-container">
            <div className="curation-wrapper">
              {data.map(({ title, img, desc }, index) => (
                <CurationCard
                  key={title}
                  title={title}
                  img={img}
                  desc={desc}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </StyledCuration>
  );
};

export default Category;

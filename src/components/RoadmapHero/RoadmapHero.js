import styled from "styled-components";
import RoadmapHeroSelect from "./RoadmapHeroSelect";

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0;
  background-image: url(https://cdn.inflearn.com/public/files/posts/3dc171db-6fbb-4561-b0cd-d8f5577e9b87/roadmap_2.jpg);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;

  .hero-title {
    font-size: 2rem;
    font-weight: 800;
    line-height: 1;
    color: #333;
  }

  .hero-detail {
    font-size: 16px;
    line-height: 1.44;
    color: #595959;
  }

  .hero-detail:first-of-type {
    margin-top: 1rem;
  }

  .search-box-container {
    margin-top: 1rem;
  }

  .search-box {
    display: flex;
    align-items: center;
    width: 500px;
    height: 48px;
    position: relative;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
    background-color: white;
  }

  input {
    border: 0;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    color: #333;
    padding: 1px 10px;
    margin-right: 35px;
  }

  input::placeholder {
    font-size: 0.9rem;
  }

  .btn {
    font-size: 16px;
    font-weight: 800;
    line-height: 1;
    color: #fff;
    background-color: #1dc078;
    border: 1px solid #1dc078;
    border-radius: 35.5px;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 70px;
    height: 100%;
    right: -35px;
  }
`;

const RoadmapHero = () => {
  return (
    <StyledHero className="roadmap-hero">
      <h1 className="hero-title">시작부터 실전까지. 로드맵</h1>
      <p className="hero-detail">
        잘 설계된 로드맵을 따라 효율적으로 강의를 학습하세요.
      </p>
      <p className="hero-detail">
        좋은 로드맵을 다른 사람과 공유하고 함께 들어요.
      </p>
      <div className="search-box-container">
        <div className="search-box-wrapper">
          <div className="search-box">
            <RoadmapHeroSelect />

            <input
              type="text"
              placeholder="학습 관련 스킬/로드맵 이름/강사명 검색하기"
            />
            <button className="btn is-rounded">검색</button>
          </div>
        </div>
      </div>
    </StyledHero>
  );
};

export default RoadmapHero;

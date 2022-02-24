import Header from "../components/Header/Header";
import RoadmapApply from "../components/RoadmapApply/RoadmapApply";
import Footer from "../components/Footer/Footer";
import MentorCard from "../components/Mentor/MentorCard";
import MentorMainLeft from "../components/Mentor/MentorMainLeft";
import styled from "styled-components";

const StyledHero = styled.div`
  padding: 0 1rem;
  background-color: #b9f1f1;

  .container {
    padding: 44px 1rem;
  }

  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url(https://cdn.inflearn.com/public/mentors/mentors_banner_w.png);
    background-position: right 30%;
    background-repeat: no-repeat;
  }

  .hero-title {
    font-size: 26px;
    font-weight: 800;
    line-height: 1.46;
    color: #1b1c1d;
  }

  .hero-desc {
    margin-top: 0.75rem;
    letter-spacing: -0.3px;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    color: #1b1c1d;
  }
`;

const StyledPanel = styled.div`
  padding: 0 1rem;

  .main-panel {
    width: 100%;
    margin-top: 2rem;
    display: flex;
  }

  .panel-right {
    width: 100%;
  }

  .panel-right-container {
    padding: 0 0 0 1rem;
    margin-top: -0.75rem;
  }

  .panel-right-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.75rem;
  }

  .panel-pagination {
    width: 100%;
    display: block;
    height: 64px;
  }

  .pagination-cover {
    display: flex;
    justify-content: center;
    padding: 18px;
    width: 100%;
  }

  li: not(: first-child) {
    margin-left: 9px;
  }

  .pagination-cover a {
    border: 1px solid #dedede;
    padding: 5px 9px;
    border-radius: 3px;
    color: #595959;
    font-size: 1rem;
    background: rgb(239, 239, 239);
    line-height: 1;
    display: inline-block;
  }

  .pagination-cover .is-current {
    background-color: #1dc078;
    border: 1px solid #1dc078;
    color: #fff;
  }

  .card-container {
    padding: 0.5rem;
    width: 25%;
  }
`;

const Mentor = () => {
  const mentorInfos = [
    {
      profile:
        "https://cdn.inflearn.com/public/users/thumbnails/117609/09c882a3-a8af-4f14-a19b-9a81256c39d0",
      title:
        "back-end 신입개발자 취직/주니어 개발자 이직, 멘토링 / 기술 면접 / 상담",
      name: "incu",
      rating: "5.0",
    },
    {
      profile:
        "https://cdn.inflearn.com/wp-content/uploads/avatars/164/164-bpfull.jpg",
      title: "실사 게임배경  / 케릭터 피규어 멘토쉽",
      name: "Sup Choi",
    },
    {
      profile:
        "https://cdn.inflearn.com/public/users/thumbnails/29336/93942b10-74f4-459d-85f6-d1aef50ccb15",
      title:
        "백앤드  / 프론트앤드 / 취직 / 커리어 고민 / 스타트업 / 개발조직 / 이직 (국내/해외)",
      name: "Jeado Ko",
      rating: "5.0",
    },
    {
      profile:
        "https://cdn.inflearn.com/public/users/thumbnails/49158/94d58544-52b3-47e6-abcd-15846dd35684",
      title: "정태현 님의 멘토링",
      name: "JeongTaeHyun",
      rating: "5.0",
    },
    {
      profile:
        "https://cdn.inflearn.com/public/users/thumbnails/36294/f93d3ba4-0207-4ca3-8fba-d3607ab61a7b",
      title:
        "신입~주니어 개발자 취직, 이력서&프론트엔드 상담 및 고민, 커리어 및 로드맵 설계",
      name: "장현석",
      rating: "5.0",
    },
    {
      profile:
        "https://cdn.inflearn.com/public/users/thumbnails/8088/05974909-f03b-42ca-8f7f-df903b492922",
      title: "개발자 이력서 / 면접 / 이직 / 커리어 멘토링",
      name: "워니",
      rating: "5.0",
    },
    {
      profile:
        "https://cdn.inflearn.com/public/main/profile/default_profile.png",
      title: "게임기획 기초편 (미 수강생도 멘토링 받습니다!)",
      name: "이진영",
    },
    {
      profile:
        "https://cdn.inflearn.com/public/users/thumbnails/46840/79cbcc48-e95a-4987-b6b3-a7f36a476ffa",
      title: "자바스크립트. 프론트엔드 취업/이직/개발자로드맵 등",
      name: "정재남",
      rating: "5.0",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <StyledHero class="mentor-hero">
          <div className="container">
            <div className="hero-image"></div>

            <h1 className="hero-title">멘토링</h1>
            <p className="hero-desc">
              업계 선배들 혹은 동료들에게서 인사이트를 얻어보세요.
              <br />더 빨리, 더 멀리 갈 수 있어요.
            </p>
          </div>
        </StyledHero>

        <StyledPanel className="container">
          <div className="main-panel">
            <MentorMainLeft />

            <div className="panel-right">
              <div className="panel-right-container">
                <div className="panel-right-wrapper">
                  {mentorInfos.map(({ profile, title, name, rating }) => (
                    <div className="card-container">
                      <MentorCard
                        key={name}
                        profile={profile}
                        title={title}
                        rating={rating}
                        name={name}
                      />
                    </div>
                  ))}
                </div>

                <div className="panel-pagination">
                  <ul className="pagination-cover">
                    <li>
                      <a href="#" className="is-current">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">5</a>
                    </li>
                    <li>
                      <a href="#" className="next">
                        <span>다음</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </StyledPanel>
      </main>
      <RoadmapApply />
      <Footer />
    </>
  );
};

export default Mentor;

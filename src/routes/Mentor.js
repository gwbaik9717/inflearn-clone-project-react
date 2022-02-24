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
      desc: `우아한형제들에서 우아한테크코스의 프론트엔드 교육을 진행하는 개발자 장현석입니다.
      이외에도 패스트캠퍼스, 유데미에서 강의를 하고 있으며 멘토링이나 강연 활동도 하고 있습니다.
      
      고졸 비전공자로 시작해 에이전시, 스타트업, 중소기업, 대기업 등의 업무 경험 그리고 프리랜서, 외주 등 소소한 경험도 가지고 있습니다.
      
      멘티분들에게 돈이 아깝지 않도록 도움이 되는 맞춤 멘토링을 추구합니다.
      
       
      
      멘토링 종류 🧐
      신입 ~ 주니어 이력서 & 포트폴리오 첨삭
      커리어 상담
      프론트엔드 학습 방법 및 로드맵 설계
      프론트엔드 개발자 성장 방법
      모의 면접
      사전 준비물 🧳
      사전에 받고 싶은 자세한 상담 내용
      멘티분의 공개 가능한 범위에서의 상세 정보 (정보를 알아야 더 좋은 상담을 할 수 있습니다)
      온라인 화상 미팅이 가능한 작업 공간 (코로나로 인해 만남이 어렵습니다)
      이력서 or 포트폴리오 첨삭의 경우 첨삭할 자료가 필요합니다.
      ---
      코로나로 인해 오프라인이 어려운 대신 최소한의 멘토링 비용을 책정했습니다.
      멘티분들에게 맞는 맞춤 멘토링을 위해 대부분 1대1로 진행합니다.
      `,
      duration: "1",
      price: "16,500",
      studentNum: "1",
      name: "incu",
      rating: "5.0",
      reviews: [
        {
          stars: 5,
          content:
            "공부 방향에 대해 고민이 많았는데 멘토링을 통해 앞으로의 방향을 어떻게 잡아나가야할지 많은 도움 얻었습니다. 성장에 대해 고민이 있으신 분들이라면 멘토링 적극 추천합니다!",
        },
        {
          stars: 4,
          content:
            "진짜 친절하게 해주셨습니다! 궁금한 점과 개선점 등등 많은 피드백을 해주셨고, 방향성을 잡아주셨습니당!",
        },
        {
          stars: 4,
          content:
            "비전공자여서 상담할 때가 필요 했었는데 필요한 공부와 취업에 필요한 내용들을 잘 알려주십니다. !! ",
        },
        {
          stars: 5,
          content:
            "백엔드로 커리어 전향을 시도하면서 궁금했던 점들이 있었는데 모두 해결됐습니다. 꼼꼼하게 잘 알려주셔서 좋았습니다 ㅎㅎ",
        },
        { stars: 5, content: "궁금한점 꼼꼼하고 친절하게 잘 알려주십니다!!!" },
        {
          stars: 5,
          content:
            "향후 커리어 개발에 있어서 어떤게 필요한지와 공부방향을 잡을 수 있어서 좋았습니다.그리고 어떤 책, 강의를 봐야하는지도 알게되었습니다.!",
        },
        {
          stars: 5,
          content:
            "궁금했던 것들도 잘 설명해주고 그 외 추가적인 부분도 많이 알려주셔서 편안하게 대화 나누고 배울 수 있었습니다.",
        },
        {
          stars: 5,
          content:
            "공부 방향성이랑 취업관련 질문들, 포트폴리오 방향성 등등 진짜 갈피를 못잡고 있었는데 굉장히 많은 도움이 되었습니다. 진짜!! 방향성 잡고자 하는 분들에게 추천드려요!",
        },
      ],
    },
    {
      profile:
        "https://cdn.inflearn.com/wp-content/uploads/avatars/164/164-bpfull.jpg",
      title: "실사 게임배경  / 케릭터 피규어 멘토쉽",
      desc: `우아한형제들에서 우아한테크코스의 프론트엔드 교육을 진행하는 개발자 장현석입니다.
      이외에도 패스트캠퍼스, 유데미에서 강의를 하고 있으며 멘토링이나 강연 활동도 하고 있습니다.
      
      고졸 비전공자로 시작해 에이전시, 스타트업, 중소기업, 대기업 등의 업무 경험 그리고 프리랜서, 외주 등 소소한 경험도 가지고 있습니다.
      
      멘티분들에게 돈이 아깝지 않도록 도움이 되는 맞춤 멘토링을 추구합니다.
      
       
      
      멘토링 종류 🧐
      신입 ~ 주니어 이력서 & 포트폴리오 첨삭
      커리어 상담
      프론트엔드 학습 방법 및 로드맵 설계
      프론트엔드 개발자 성장 방법
      모의 면접
      사전 준비물 🧳
      사전에 받고 싶은 자세한 상담 내용
      멘티분의 공개 가능한 범위에서의 상세 정보 (정보를 알아야 더 좋은 상담을 할 수 있습니다)
      온라인 화상 미팅이 가능한 작업 공간 (코로나로 인해 만남이 어렵습니다)
      이력서 or 포트폴리오 첨삭의 경우 첨삭할 자료가 필요합니다.
      ---
      코로나로 인해 오프라인이 어려운 대신 최소한의 멘토링 비용을 책정했습니다.
      멘티분들에게 맞는 맞춤 멘토링을 위해 대부분 1대1로 진행합니다.
      `,
      duration: "1",
      price: "16,500",
      studentNum: "1",
      name: "Sup Choi",
    },
    {
      profile:
        "https://cdn.inflearn.com/public/users/thumbnails/29336/93942b10-74f4-459d-85f6-d1aef50ccb15",
      title:
        "백앤드  / 프론트앤드 / 취직 / 커리어 고민 / 스타트업 / 개발조직 / 이직 (국내/해외)",
      name: "Jeado Ko",
      rating: "5.0",
      reviews: [
        {
          stars: 5,
          content:
            "공부 방향에 대해 고민이 많았는데 멘토링을 통해 앞으로의 방향을 어떻게 잡아나가야할지 많은 도움 얻었습니다. 성장에 대해 고민이 있으신 분들이라면 멘토링 적극 추천합니다!",
        },
        {
          stars: 4,
          content:
            "진짜 친절하게 해주셨습니다! 궁금한 점과 개선점 등등 많은 피드백을 해주셨고, 방향성을 잡아주셨습니당!",
        },
        {
          stars: 4,
          content:
            "비전공자여서 상담할 때가 필요 했었는데 필요한 공부와 취업에 필요한 내용들을 잘 알려주십니다. !! ",
        },
        {
          stars: 5,
          content:
            "백엔드로 커리어 전향을 시도하면서 궁금했던 점들이 있었는데 모두 해결됐습니다. 꼼꼼하게 잘 알려주셔서 좋았습니다 ㅎㅎ",
        },
        { stars: 5, content: "궁금한점 꼼꼼하고 친절하게 잘 알려주십니다!!!" },
        {
          stars: 5,
          content:
            "향후 커리어 개발에 있어서 어떤게 필요한지와 공부방향을 잡을 수 있어서 좋았습니다.그리고 어떤 책, 강의를 봐야하는지도 알게되었습니다.!",
        },
        {
          stars: 5,
          content:
            "궁금했던 것들도 잘 설명해주고 그 외 추가적인 부분도 많이 알려주셔서 편안하게 대화 나누고 배울 수 있었습니다.",
        },
        {
          stars: 5,
          content:
            "공부 방향성이랑 취업관련 질문들, 포트폴리오 방향성 등등 진짜 갈피를 못잡고 있었는데 굉장히 많은 도움이 되었습니다. 진짜!! 방향성 잡고자 하는 분들에게 추천드려요!",
        },
      ],
    },
    {
      profile:
        "https://cdn.inflearn.com/public/users/thumbnails/49158/94d58544-52b3-47e6-abcd-15846dd35684",
      title: "정태현 님의 멘토링",
      desc: `우아한형제들에서 우아한테크코스의 프론트엔드 교육을 진행하는 개발자 장현석입니다.
      이외에도 패스트캠퍼스, 유데미에서 강의를 하고 있으며 멘토링이나 강연 활동도 하고 있습니다.
      
      고졸 비전공자로 시작해 에이전시, 스타트업, 중소기업, 대기업 등의 업무 경험 그리고 프리랜서, 외주 등 소소한 경험도 가지고 있습니다.
      
      멘티분들에게 돈이 아깝지 않도록 도움이 되는 맞춤 멘토링을 추구합니다.
      
       
      
      멘토링 종류 🧐
      신입 ~ 주니어 이력서 & 포트폴리오 첨삭
      커리어 상담
      프론트엔드 학습 방법 및 로드맵 설계
      프론트엔드 개발자 성장 방법
      모의 면접
      사전 준비물 🧳
      사전에 받고 싶은 자세한 상담 내용
      멘티분의 공개 가능한 범위에서의 상세 정보 (정보를 알아야 더 좋은 상담을 할 수 있습니다)
      온라인 화상 미팅이 가능한 작업 공간 (코로나로 인해 만남이 어렵습니다)
      이력서 or 포트폴리오 첨삭의 경우 첨삭할 자료가 필요합니다.
      ---
      코로나로 인해 오프라인이 어려운 대신 최소한의 멘토링 비용을 책정했습니다.
      멘티분들에게 맞는 맞춤 멘토링을 위해 대부분 1대1로 진행합니다.
      `,
      duration: "1",
      price: "16,500",
      studentNum: "1",
      name: "JeongTaeHyun",
      rating: "5.0",
      reviews: [
        {
          stars: 5,
          content:
            "공부 방향에 대해 고민이 많았는데 멘토링을 통해 앞으로의 방향을 어떻게 잡아나가야할지 많은 도움 얻었습니다. 성장에 대해 고민이 있으신 분들이라면 멘토링 적극 추천합니다!",
        },
        {
          stars: 4,
          content:
            "진짜 친절하게 해주셨습니다! 궁금한 점과 개선점 등등 많은 피드백을 해주셨고, 방향성을 잡아주셨습니당!",
        },
        {
          stars: 4,
          content:
            "비전공자여서 상담할 때가 필요 했었는데 필요한 공부와 취업에 필요한 내용들을 잘 알려주십니다. !! ",
        },
        {
          stars: 5,
          content:
            "백엔드로 커리어 전향을 시도하면서 궁금했던 점들이 있었는데 모두 해결됐습니다. 꼼꼼하게 잘 알려주셔서 좋았습니다 ㅎㅎ",
        },
        { stars: 5, content: "궁금한점 꼼꼼하고 친절하게 잘 알려주십니다!!!" },
        {
          stars: 5,
          content:
            "향후 커리어 개발에 있어서 어떤게 필요한지와 공부방향을 잡을 수 있어서 좋았습니다.그리고 어떤 책, 강의를 봐야하는지도 알게되었습니다.!",
        },
        {
          stars: 5,
          content:
            "궁금했던 것들도 잘 설명해주고 그 외 추가적인 부분도 많이 알려주셔서 편안하게 대화 나누고 배울 수 있었습니다.",
        },
        {
          stars: 5,
          content:
            "공부 방향성이랑 취업관련 질문들, 포트폴리오 방향성 등등 진짜 갈피를 못잡고 있었는데 굉장히 많은 도움이 되었습니다. 진짜!! 방향성 잡고자 하는 분들에게 추천드려요!",
        },
      ],
    },
    {
      profile:
        "https://cdn.inflearn.com/public/users/thumbnails/36294/f93d3ba4-0207-4ca3-8fba-d3607ab61a7b",
      title:
        "신입~주니어 개발자 취직, 이력서&프론트엔드 상담 및 고민, 커리어 및 로드맵 설계",
      desc: `우아한형제들에서 우아한테크코스의 프론트엔드 교육을 진행하는 개발자 장현석입니다.
      이외에도 패스트캠퍼스, 유데미에서 강의를 하고 있으며 멘토링이나 강연 활동도 하고 있습니다.
      
      고졸 비전공자로 시작해 에이전시, 스타트업, 중소기업, 대기업 등의 업무 경험 그리고 프리랜서, 외주 등 소소한 경험도 가지고 있습니다.
      
      멘티분들에게 돈이 아깝지 않도록 도움이 되는 맞춤 멘토링을 추구합니다.
      
       
      
      멘토링 종류 🧐
      신입 ~ 주니어 이력서 & 포트폴리오 첨삭
      커리어 상담
      프론트엔드 학습 방법 및 로드맵 설계
      프론트엔드 개발자 성장 방법
      모의 면접
      사전 준비물 🧳
      사전에 받고 싶은 자세한 상담 내용
      멘티분의 공개 가능한 범위에서의 상세 정보 (정보를 알아야 더 좋은 상담을 할 수 있습니다)
      온라인 화상 미팅이 가능한 작업 공간 (코로나로 인해 만남이 어렵습니다)
      이력서 or 포트폴리오 첨삭의 경우 첨삭할 자료가 필요합니다.
      ---
      코로나로 인해 오프라인이 어려운 대신 최소한의 멘토링 비용을 책정했습니다.
      멘티분들에게 맞는 맞춤 멘토링을 위해 대부분 1대1로 진행합니다.
      `,
      duration: "1",
      price: "16,500",
      studentNum: "1",
      name: "장현석",
      rating: "5.0",
      reviews: [
        {
          stars: 5,
          content:
            "공부 방향에 대해 고민이 많았는데 멘토링을 통해 앞으로의 방향을 어떻게 잡아나가야할지 많은 도움 얻었습니다. 성장에 대해 고민이 있으신 분들이라면 멘토링 적극 추천합니다!",
        },
        {
          stars: 4,
          content:
            "진짜 친절하게 해주셨습니다! 궁금한 점과 개선점 등등 많은 피드백을 해주셨고, 방향성을 잡아주셨습니당!",
        },
        {
          stars: 4,
          content:
            "비전공자여서 상담할 때가 필요 했었는데 필요한 공부와 취업에 필요한 내용들을 잘 알려주십니다. !! ",
        },
        {
          stars: 5,
          content:
            "백엔드로 커리어 전향을 시도하면서 궁금했던 점들이 있었는데 모두 해결됐습니다. 꼼꼼하게 잘 알려주셔서 좋았습니다 ㅎㅎ",
        },
        { stars: 5, content: "궁금한점 꼼꼼하고 친절하게 잘 알려주십니다!!!" },
        {
          stars: 5,
          content:
            "향후 커리어 개발에 있어서 어떤게 필요한지와 공부방향을 잡을 수 있어서 좋았습니다.그리고 어떤 책, 강의를 봐야하는지도 알게되었습니다.!",
        },
        {
          stars: 5,
          content:
            "궁금했던 것들도 잘 설명해주고 그 외 추가적인 부분도 많이 알려주셔서 편안하게 대화 나누고 배울 수 있었습니다.",
        },
        {
          stars: 5,
          content:
            "공부 방향성이랑 취업관련 질문들, 포트폴리오 방향성 등등 진짜 갈피를 못잡고 있었는데 굉장히 많은 도움이 되었습니다. 진짜!! 방향성 잡고자 하는 분들에게 추천드려요!",
        },
      ],
    },
    {
      profile:
        "https://cdn.inflearn.com/public/users/thumbnails/8088/05974909-f03b-42ca-8f7f-df903b492922",
      title: "개발자 이력서 / 면접 / 이직 / 커리어 멘토링",
      desc: `우아한형제들에서 우아한테크코스의 프론트엔드 교육을 진행하는 개발자 장현석입니다.
      이외에도 패스트캠퍼스, 유데미에서 강의를 하고 있으며 멘토링이나 강연 활동도 하고 있습니다.
      
      고졸 비전공자로 시작해 에이전시, 스타트업, 중소기업, 대기업 등의 업무 경험 그리고 프리랜서, 외주 등 소소한 경험도 가지고 있습니다.
      
      멘티분들에게 돈이 아깝지 않도록 도움이 되는 맞춤 멘토링을 추구합니다.
      
       
      
      멘토링 종류 🧐
      신입 ~ 주니어 이력서 & 포트폴리오 첨삭
      커리어 상담
      프론트엔드 학습 방법 및 로드맵 설계
      프론트엔드 개발자 성장 방법
      모의 면접
      사전 준비물 🧳
      사전에 받고 싶은 자세한 상담 내용
      멘티분의 공개 가능한 범위에서의 상세 정보 (정보를 알아야 더 좋은 상담을 할 수 있습니다)
      온라인 화상 미팅이 가능한 작업 공간 (코로나로 인해 만남이 어렵습니다)
      이력서 or 포트폴리오 첨삭의 경우 첨삭할 자료가 필요합니다.
      ---
      코로나로 인해 오프라인이 어려운 대신 최소한의 멘토링 비용을 책정했습니다.
      멘티분들에게 맞는 맞춤 멘토링을 위해 대부분 1대1로 진행합니다.
      `,
      duration: "1",
      price: "16,500",
      studentNum: "1",
      name: "워니",
      rating: "5.0",
      reviews: [
        {
          stars: 5,
          content:
            "공부 방향에 대해 고민이 많았는데 멘토링을 통해 앞으로의 방향을 어떻게 잡아나가야할지 많은 도움 얻었습니다. 성장에 대해 고민이 있으신 분들이라면 멘토링 적극 추천합니다!",
        },
        {
          stars: 4,
          content:
            "진짜 친절하게 해주셨습니다! 궁금한 점과 개선점 등등 많은 피드백을 해주셨고, 방향성을 잡아주셨습니당!",
        },
        {
          stars: 4,
          content:
            "비전공자여서 상담할 때가 필요 했었는데 필요한 공부와 취업에 필요한 내용들을 잘 알려주십니다. !! ",
        },
        {
          stars: 5,
          content:
            "백엔드로 커리어 전향을 시도하면서 궁금했던 점들이 있었는데 모두 해결됐습니다. 꼼꼼하게 잘 알려주셔서 좋았습니다 ㅎㅎ",
        },
        { stars: 5, content: "궁금한점 꼼꼼하고 친절하게 잘 알려주십니다!!!" },
        {
          stars: 5,
          content:
            "향후 커리어 개발에 있어서 어떤게 필요한지와 공부방향을 잡을 수 있어서 좋았습니다.그리고 어떤 책, 강의를 봐야하는지도 알게되었습니다.!",
        },
        {
          stars: 5,
          content:
            "궁금했던 것들도 잘 설명해주고 그 외 추가적인 부분도 많이 알려주셔서 편안하게 대화 나누고 배울 수 있었습니다.",
        },
        {
          stars: 5,
          content:
            "공부 방향성이랑 취업관련 질문들, 포트폴리오 방향성 등등 진짜 갈피를 못잡고 있었는데 굉장히 많은 도움이 되었습니다. 진짜!! 방향성 잡고자 하는 분들에게 추천드려요!",
        },
      ],
    },
    {
      profile:
        "https://cdn.inflearn.com/public/main/profile/default_profile.png",
      title: "게임기획 기초편 (미 수강생도 멘토링 받습니다!)",
      desc: `우아한형제들에서 우아한테크코스의 프론트엔드 교육을 진행하는 개발자 장현석입니다.
      이외에도 패스트캠퍼스, 유데미에서 강의를 하고 있으며 멘토링이나 강연 활동도 하고 있습니다.
      
      고졸 비전공자로 시작해 에이전시, 스타트업, 중소기업, 대기업 등의 업무 경험 그리고 프리랜서, 외주 등 소소한 경험도 가지고 있습니다.
      
      멘티분들에게 돈이 아깝지 않도록 도움이 되는 맞춤 멘토링을 추구합니다.
      
       
      
      멘토링 종류 🧐
      신입 ~ 주니어 이력서 & 포트폴리오 첨삭
      커리어 상담
      프론트엔드 학습 방법 및 로드맵 설계
      프론트엔드 개발자 성장 방법
      모의 면접
      사전 준비물 🧳
      사전에 받고 싶은 자세한 상담 내용
      멘티분의 공개 가능한 범위에서의 상세 정보 (정보를 알아야 더 좋은 상담을 할 수 있습니다)
      온라인 화상 미팅이 가능한 작업 공간 (코로나로 인해 만남이 어렵습니다)
      이력서 or 포트폴리오 첨삭의 경우 첨삭할 자료가 필요합니다.
      ---
      코로나로 인해 오프라인이 어려운 대신 최소한의 멘토링 비용을 책정했습니다.
      멘티분들에게 맞는 맞춤 멘토링을 위해 대부분 1대1로 진행합니다.
      `,
      duration: "1",
      price: "16,500",
      studentNum: "1",
      name: "이진영",
      reviews: [
        {
          stars: 5,
          content:
            "공부 방향에 대해 고민이 많았는데 멘토링을 통해 앞으로의 방향을 어떻게 잡아나가야할지 많은 도움 얻었습니다. 성장에 대해 고민이 있으신 분들이라면 멘토링 적극 추천합니다!",
        },
        {
          stars: 4,
          content:
            "진짜 친절하게 해주셨습니다! 궁금한 점과 개선점 등등 많은 피드백을 해주셨고, 방향성을 잡아주셨습니당!",
        },
        {
          stars: 4,
          content:
            "비전공자여서 상담할 때가 필요 했었는데 필요한 공부와 취업에 필요한 내용들을 잘 알려주십니다. !! ",
        },
        {
          stars: 5,
          content:
            "백엔드로 커리어 전향을 시도하면서 궁금했던 점들이 있었는데 모두 해결됐습니다. 꼼꼼하게 잘 알려주셔서 좋았습니다 ㅎㅎ",
        },
        { stars: 5, content: "궁금한점 꼼꼼하고 친절하게 잘 알려주십니다!!!" },
        {
          stars: 5,
          content:
            "향후 커리어 개발에 있어서 어떤게 필요한지와 공부방향을 잡을 수 있어서 좋았습니다.그리고 어떤 책, 강의를 봐야하는지도 알게되었습니다.!",
        },
        {
          stars: 5,
          content:
            "궁금했던 것들도 잘 설명해주고 그 외 추가적인 부분도 많이 알려주셔서 편안하게 대화 나누고 배울 수 있었습니다.",
        },
        {
          stars: 5,
          content:
            "공부 방향성이랑 취업관련 질문들, 포트폴리오 방향성 등등 진짜 갈피를 못잡고 있었는데 굉장히 많은 도움이 되었습니다. 진짜!! 방향성 잡고자 하는 분들에게 추천드려요!",
        },
      ],
    },
    {
      profile:
        "https://cdn.inflearn.com/public/users/thumbnails/46840/79cbcc48-e95a-4987-b6b3-a7f36a476ffa",
      title: "자바스크립트. 프론트엔드 취업/이직/개발자로드맵 등",
      desc: `우아한형제들에서 우아한테크코스의 프론트엔드 교육을 진행하는 개발자 장현석입니다.
      이외에도 패스트캠퍼스, 유데미에서 강의를 하고 있으며 멘토링이나 강연 활동도 하고 있습니다.
      
      고졸 비전공자로 시작해 에이전시, 스타트업, 중소기업, 대기업 등의 업무 경험 그리고 프리랜서, 외주 등 소소한 경험도 가지고 있습니다.
      
      멘티분들에게 돈이 아깝지 않도록 도움이 되는 맞춤 멘토링을 추구합니다.
      
       
      
      멘토링 종류 🧐
      신입 ~ 주니어 이력서 & 포트폴리오 첨삭
      커리어 상담
      프론트엔드 학습 방법 및 로드맵 설계
      프론트엔드 개발자 성장 방법
      모의 면접
      사전 준비물 🧳
      사전에 받고 싶은 자세한 상담 내용
      멘티분의 공개 가능한 범위에서의 상세 정보 (정보를 알아야 더 좋은 상담을 할 수 있습니다)
      온라인 화상 미팅이 가능한 작업 공간 (코로나로 인해 만남이 어렵습니다)
      이력서 or 포트폴리오 첨삭의 경우 첨삭할 자료가 필요합니다.
      ---
      코로나로 인해 오프라인이 어려운 대신 최소한의 멘토링 비용을 책정했습니다.
      멘티분들에게 맞는 맞춤 멘토링을 위해 대부분 1대1로 진행합니다.
      `,
      duration: "1",
      price: "16,500",
      studentNum: "1",
      name: "정재남",
      rating: "5.0",
      reviews: [
        {
          stars: 5,
          content:
            "공부 방향에 대해 고민이 많았는데 멘토링을 통해 앞으로의 방향을 어떻게 잡아나가야할지 많은 도움 얻었습니다. 성장에 대해 고민이 있으신 분들이라면 멘토링 적극 추천합니다!",
        },
        {
          stars: 4,
          content:
            "진짜 친절하게 해주셨습니다! 궁금한 점과 개선점 등등 많은 피드백을 해주셨고, 방향성을 잡아주셨습니당!",
        },
        {
          stars: 4,
          content:
            "비전공자여서 상담할 때가 필요 했었는데 필요한 공부와 취업에 필요한 내용들을 잘 알려주십니다. !! ",
        },
        {
          stars: 5,
          content:
            "백엔드로 커리어 전향을 시도하면서 궁금했던 점들이 있었는데 모두 해결됐습니다. 꼼꼼하게 잘 알려주셔서 좋았습니다 ㅎㅎ",
        },
        { stars: 5, content: "궁금한점 꼼꼼하고 친절하게 잘 알려주십니다!!!" },
        {
          stars: 5,
          content:
            "향후 커리어 개발에 있어서 어떤게 필요한지와 공부방향을 잡을 수 있어서 좋았습니다.그리고 어떤 책, 강의를 봐야하는지도 알게되었습니다.!",
        },
        {
          stars: 5,
          content:
            "궁금했던 것들도 잘 설명해주고 그 외 추가적인 부분도 많이 알려주셔서 편안하게 대화 나누고 배울 수 있었습니다.",
        },
        {
          stars: 5,
          content:
            "공부 방향성이랑 취업관련 질문들, 포트폴리오 방향성 등등 진짜 갈피를 못잡고 있었는데 굉장히 많은 도움이 되었습니다. 진짜!! 방향성 잡고자 하는 분들에게 추천드려요!",
        },
      ],
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
                  {mentorInfos.map(
                    ({
                      profile,
                      title,
                      name,
                      rating,
                      desc,
                      duration,
                      price,
                      studentNum,
                      reviews,
                    }) => (
                      <div className="card-container">
                        <MentorCard
                          key={name}
                          profile={profile}
                          title={title}
                          rating={rating}
                          name={name}
                          desc={desc}
                          duration={duration}
                          price={price}
                          studentNum={studentNum}
                          reviews={reviews}
                        />
                      </div>
                    )
                  )}
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

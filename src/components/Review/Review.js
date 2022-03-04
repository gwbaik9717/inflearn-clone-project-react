import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const StyledReview = styled.section`
  padding-top: 24px;
  padding-bottom: 24px;

  .container {
    padding: 0 10px;
  }

  .review-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .review-left {
    max-width: 480px;
    width: 100%;
    padding: 40px 16px 40px 0;
  }

  .review-left .title {
    color: #242424;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.33;
    font-size: 2.25rem;
  }

  .title .is-colored {
    color: #47c880;
    margin-right: 10px;
  }

  .review-left .desc {
    color: #757575;
    margin-bottom: 36px;
    font-size: 1rem;
  }

  .review-left .buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: -0.5rem;
  }

  .review-left .btn {
    font-size: 16px;
    color: #333;
    border-radius: 3px;
    border: 1px solid #1dc078;
    background-color: #fff;
    line-height: 1;
    margin-bottom: 0.5rem;
    padding: 10px 16px;
  }

  .review-left .btn:not(:last-child) {
    margin-right: 0.5rem;
  }

  .review-left .btn span {
  }

  .review-left .btn .icon {
    font-size: 12px;
    margin-left: 0.25rem;
    width: 1rem;
    height: 1rem;
  }

  .review-right {
    max-width: 590px;
    width: 100%;
  }

  .swiper-container {
    height: 480px;
    position: relative;
  }

  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background-color: #f9f9f9;
    margin: 5px;
    border-radius: 4px;
    color: #333;
    padding: 1rem;
    height: auto !important;
    width: auto !important;
    box-shadow: 0 2px 3px rgb(0 10 18 / 10%), 0 0 0 1px rgb(0 10 18 / 10%);
  }

  .swiper-mask {
    width: 100%;
    height: 48px;
    background: linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0),
      hsla(0, 0%, 100%, 0.72)
    );
    position: absolute;
    bottom: 0;
    z-index: 1;
  }

  .box-top {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .box-top .author {
    color: #757570;
    margin-right: 8px;
  }

  .box-top .time {
    color: #979797;
    font-size: 0.875rem;
  }

  .box-bottom {
  }

  .box-bottom .title {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    font-size: 1.125rem;
  }

  .box-bottom .title .icon {
    font-size: 16px;
    width: 1rem;
    height: 1rem;
    line-height: 1;
  }

  .box-bottom .desc {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 16px 0;

    .container {
      padding: 0 1rem;
    }

    .review-wrapper {
      flex-direction: column;
      justify-content: flex-start;
    }

    .review-left {
      max-width: unset;
      padding: 0;
      margin-bottom: 36px;
    }

    .review-left .title {
      margin-bottom: 8px;
      font-size: 1.5rem;
    }

    .review-left .desc {
      margin-bottom: 32px;
      font-size: 0.9375rem;
    }

    .review-right {
      max-width: unset;
      padding: 0 32px;
    }

    .swiper-mask {
      height: 60px;
    }
  }
`;

const Review = () => {
  const reviews = [
    {
      author: "임세희",
      time: 3,
      title: "[딥러닝 전문가 과정 DL1101] 딥러닝을 위한 파이썬 레벨1",
      desc: "기초 구문을 가지고 구현하는 방법이 대단히 유익했습니다. 최고의 기본 강의입니다.",
    },
    {
      author: "이석원",
      time: 3,
      title: "스프링 입문 - 코드로 배우는 스프링 부트, 웹 MVC, DB 접근 기술",
      desc: "감사합니다!.",
    },

    {
      author: "yung-hwan.kim",
      time: 3,
      title: "프로그래밍 시작하기 : 파이썬 입문 (Inflearn Original)",
      desc: "회사 보안때문인지 파일 설치가 조금 어려웠지만 설명을 잘 해주셨습니다.",
    },
    {
      author: "파랑삶",
      time: 3,
      title: "빅데이터 분석기사 시험 실기(Python)",
      desc: "빅데이터분석기사 강의 중에 가장 알짜배기였습니다! ㅎㅎ 코드도 이해하기 쉽게 설명해주셔서 감사합니다 지식 공유 감사드립니다~",
    },
    {
      author: "andyjiy1",
      time: 3,
      title: "실무에서 바로 쓰는 영어 이메일",
      desc: "기잘 정리되어있어서 편한강의였고  많은걸 배워갑니다.",
    },
    {
      author: "godkkoo",
      time: 3,
      title: "코딩으로 학습하는 리팩토링",
      desc: "좋은 강의 감사합니다.",
    },
    {
      author: "gwgaang",
      time: 3,
      title: "정보보안 전문가란? 무엇을 하고 어떻게 준비해야 할까.",
      desc: "잘 봤습니다.",
    },
  ];

  return (
    <StyledReview className="review">
      <div className="container">
        <div className="review-wrapper">
          <div className="review-left">
            <div className="title">
              <span className="is-colored">834,130</span>
              명이 <br />
              인프런과 함께합니다.
            </div>
            <div className="desc">
              학교에서 배우기 어렵거나 큰 비용을 <br />
              지불해야만 배울 수 있는 전문적인 지식들을 제공합니다. <br />
              오픈 플랫폼의 이점을 통해 다양성과 경제성을 모두 높입니다.
            </div>
            <div className="buttons">
              <div className="btn">
                <span>수강평 더보기</span>
                <span className="icon">
                  <FontAwesomeIcon icon={All.faChevronRight} />
                </span>
              </div>
              <div className="btn">
                <span>기능/강좌 요청하기</span>
                <span className="icon">
                  <FontAwesomeIcon icon={All.faChevronRight} />
                </span>
              </div>
            </div>
          </div>

          <div className="review-right">
            <Swiper
              direction={"vertical"}
              className={"swiper-container"}
              spaceBetween={20}
              slidesPerView={"auto"}
              centeredSlides={false}
              loop={true}
              loopedSlides={5}
              grabCursor
              mousewheel
            >
              {reviews.map(({ author, time, title, desc }, index) => (
                <SwiperSlide key={title} virtualIndex={index}>
                  <div className="box-top">
                    <div className="author">{author}님(수강생)</div>
                    <div className="time">{time}시간 전</div>
                  </div>
                  <div className="box-bottom">
                    <div className="title">
                      <span>{title}</span>
                      <span className="icon">
                        <FontAwesomeIcon icon={All.faAngleRight} />
                      </span>
                    </div>
                    <div className="desc">{desc}</div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-mask"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </StyledReview>
  );
};

export default Review;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import SwiperSlideElements from "./SwiperSlideElements";
import PaginationController from "./PaginationController";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledHero = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .swiper-container {
    width: 100%;
  }

  .swiper-slide {
    height: 320px;
  }
`;

const Hero = () => {
  const datas = [
    {
      title: "React 잘 먹겠습니다! 🍽",
      tags: ["얼리버드 30%", "지식공유신청"],
      details: "입문부터 활용까지, 리액트 한 강의로 정복하기!",
      img: "https://cdn.inflearn.com/public/main_sliders/63f64772-e021-4192-acbc-122648e73470/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%20%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%8B%E1%85%B3%E1%86%B7-2%20%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1.jpg",
      bgColor: "#153a55",
    },
    {
      title: "반드시 알아야 하는 Git & GitHub",
      tags: ["얼리버드 30%", "지식공유신청"],
      details: "검증된 강의력! 얄팍한 코딩사전에게 배워요.",
      img: "https://cdn.inflearn.com/public/main_sliders/4d5d0cc5-e463-4afa-92f8-534332333501/git-github-infleran%20%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1.png",
      bgColor: "#153a55",
    },
    {
      title: "유니티로 머신러닝을? 쉽게 만드는 강화학습 환경 🤖",
      tags: ["얼리버드 30%", "지식공유신청"],
      details: "입문부터 활용까지, 리액트 한 강의로 정복하기!",
      img: "https://cdn.inflearn.com/public/main_sliders/b6293d45-2b68-4b99-a37e-de51f1d24402/325805-eng.png",
      bgColor: "#153a55",
    },
  ];

  const menu = ["지식공유의 전당", "리액트 네이티브", "리팩토링"];

  const [slideChanged, setSlideChanged] = useState(false);

  return (
    <StyledHero className="hero">
      <Swiper
        modules={[Pagination, Navigation]}
        className="swiper-container"
        navigation={{
          nextEl: ".hero .swiper-next",
          prevEl: ".hero .swiper-prev",
        }}
        pagination={{
          el: ".hero .swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + menu[index] + "</span>";
          },
        }}
        slidesPerView={1}
        onSlideChange={() => {
          setSlideChanged(true);
          setSlideChanged(false);
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {datas.map(({ title, tags, details, img, bgColor }, index) => (
          <SwiperSlide key={title} tag="a" virtualIndex={index}>
            <SwiperSlideElements
              title={title}
              tags={tags}
              details={details}
              img={img}
            />
          </SwiperSlide>
        ))}

        <PaginationController length={menu.length} />
      </Swiper>
    </StyledHero>
  );
};

export default Hero;

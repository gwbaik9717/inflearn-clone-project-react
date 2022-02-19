import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import BannerContainer from "./BannerContainer";
import BannerButtons from "./BannerButtons";
import styled from "styled-components";

const StyledBanner = styled.section`
  padding: 24px 0;
`;

const StyledSwiperPagination = styled.div`
  position: absolute;
  display: flex;
  width: auto;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
`;

const Banner = () => {
  const datas = [
    {
      title1: "모든 팀원이 인프런의 강의들을",
      title2: "자유롭게 학습하는 환경을 제공해주세요.",
      titleColor: "#404040",
      btnText: "지식공유 알아보기",
      bgImg:
        "https://cdn.inflearn.com/public/main_sliders/38744ba0-b12a-491a-9ca2-43375c3905ba/share-you.jpg",
    },
    {
      title1: "당신은 더 좋은 곳에 갈 수 있어요.",
      title2: "지금 열려있는 채용공고를 확인해보세요.",
      titleColor: "#fff",
      btnText: "공고 확인하기",
      bgImg:
        "https://cdn.inflearn.com/public/main_sliders/39bcb91f-64a4-4a16-8878-e8dc7cd342e8/bottom-1920-205-%28221%29.jpg",
    },
    {
      title1: "우리는 최고입니다.",
      title2: "자유롭게 학습하는 환경을 제공해주세요.",
      titleColor: "#404040",
      btnText: "비즈니스 알아보기",
      bgImg:
        "https://cdn.inflearn.com/public/main_sliders/3b67a1a1-aae3-442e-8e17-791b7cdfb5f5/bottom-1920-205-%281111%29.jpg",
    },
  ];

  return (
    <StyledBanner className="banner2 slider">
      <Swiper
        modules={[Pagination, Navigation]}
        className="swiper-container"
        centeredSlides
        navigation={{
          nextEl: ".banner2 .swiper-next",
          prevEl: ".banner2 .swiper-prev",
        }}
        pagination={{
          el: ".banner2 .swiper-pagination",
          clickable: true,
        }}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {datas.map(({ title1, title2, titleColor, btnText, bgImg }, index) => (
          <SwiperSlide key={title1} virtualIndex={index}>
            <BannerContainer
              title1={title1}
              title2={title2}
              titleColor={titleColor}
              btnText={btnText}
              bg={bgImg}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <StyledSwiperPagination className="swiper-pagination"></StyledSwiperPagination>
      <BannerButtons />
    </StyledBanner>
  );
};

export default Banner;

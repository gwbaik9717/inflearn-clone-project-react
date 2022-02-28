import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import CategoryCard from "./CategoryCard";
import styled from "styled-components";

const StyledContent = styled.div`
  @media (max-width: 1220px) {
    .swiper-prev.navBtn {
      left: -10px;
    }
  }

  @media (max-width: 1220px) {
    .swiper-next.navBtn {
      right: -10px;
    }
  }

  @media (min-width: 1080px) {
    .swiper-slide {
      max-width: calc(100% / 6);
    }
  }

  @media (min-width: 940px) and (max-width: 1079px) {
    .swiper-slide {
      max-width: calc(100% / 5);
    }
  }

  @media (min-width: 769px) and (max-width: 939px) {
    .swiper-slide {
      max-width: calc(100% / 4);
    }
  }
`;

const CategoryContent = ({ categories }) => {
  return (
    <StyledContent className="content">
      <Swiper
        modules={[Navigation]}
        className="swiper-container"
        navigation={{
          nextEl: ".category .swiper-next",
          prevEl: ".category .swiper-prev",
        }}
        breakpoints={{
          1080: {
            slidesPerView: 6,
          },
          940: {
            slidesPerView: 5,
          },
          769: {
            slidesPerView: 4,
          },
        }}
        slidesPerView={6}
        onSlideChange={() => console.log("category content")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {categories.map(({ title, backgroundPosition }, index) => (
          <SwiperSlide key={title} virtualIndex={index}>
            <CategoryCard
              title={title}
              backgroundPosition={backgroundPosition}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-prev navBtn circle">
        <FontAwesomeIcon icon={All.faChevronLeft} />
      </div>

      <div className="swiper-next navBtn circle">
        <FontAwesomeIcon icon={All.faChevronRight} />
      </div>
    </StyledContent>
  );
};

export default CategoryContent;

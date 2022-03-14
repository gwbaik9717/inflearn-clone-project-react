import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import CourseCard from "./CourseCard";
import styled from "styled-components";
import { courseData } from "../../data/dummydatas";

const CoursesLists = () => {
  return (
    <StyledLists className="courses-lists">
      <Swiper
        modules={[Navigation]}
        className="swiper-container"
        breakpoints={{
          1240: {
            slidesPerView: 5,
          },
          1080: {
            slidesPerView: 4,
          },
          618: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          nextEl: ".courses .swiper-next",
          prevEl: ".courses .swiper-prev",
        }}
        spaceBetween={6}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {courseData.map(
          (
            {
              id,
              title,
              tags,
              author,
              img,
              reviewCount,
              price,
              level,
              fields,
              skills,
            },
            index
          ) => (
            <SwiperSlide key={title} virtualIndex={index}>
              <CourseCard
                id={id}
                title={title}
                tags={tags}
                author={author}
                img={img}
                reviewCount={reviewCount}
                price={price}
                level={level}
                fields={fields}
                skills={skills}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>

      <div className="swiper-prev navBtn circle">
        <FontAwesomeIcon icon={All.faChevronLeft} />
      </div>

      <div className="swiper-next navBtn circle">
        <FontAwesomeIcon icon={All.faChevronRight} />
      </div>
    </StyledLists>
  );
};

const StyledLists = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .swiper-container {
    display: flex;
  }

  .swiper-wrapper {
    padding: 6px 0;
  }

  .swiper-slide:last-child {
    margin-right: 0 !important;
  }

  @media (min-width: 1240px) {
    .swiper-slide {
      max-width: calc((100% - 8px) / 5);
    }
  }

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

  @media (min-width: 1080px) and (max-width: 1239px) {
    .swiper-slide {
      max-width: calc((100% - 8px) / 4);
    }
  }

  @media (min-width: 618px) and (max-width: 1079px) {
    .swiper-slide {
      max-width: calc((100% - 8px) / 3);
    }
  }

  @media (max-width: 618px) {
    .swiper-container {
      overflow: visible;
    }
  }

  @media (max-width: 617px) {
    .swiper-slide {
      max-width: calc((100% - 8px) / 2);
    }
  }

  @media (max-width: 768px) {
    .navBtn.circle {
      display: none;
    }
  }
`;

export default CoursesLists;

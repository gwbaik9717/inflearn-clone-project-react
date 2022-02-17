import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import CategoryCard from "./CategoryCard";

const CategoryContent = () => {
  const datas = [
    { title: "보안", backgroundPosition: "-154px -154px" },
    { title: "모바일", backgroundPosition: "-82px -82px" },
    { title: "알고리즘", backgroundPosition: "-10px -226px" },
    { title: "웹개발", backgroundPosition: "-82px -10px" },
    { title: "업무 스킬", backgroundPosition: "-154px -82px" },
    { title: "자바스크립트", backgroundPosition: "-82px -154px" },
    { title: "자바", backgroundPosition: "-226px -82px" },
  ];

  return (
    <div class="content">
      <Swiper
        modules={[Navigation]}
        className="swiper-container"
        navigation={{
          nextEl: ".category .swiper-next",
          prevEl: ".category .swiper-prev",
        }}
        slidesPerView={6}
        onSlideChange={() => console.log("category content")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {datas.map(({ title, backgroundPosition }, index) => (
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
    </div>
  );
};

export default CategoryContent;

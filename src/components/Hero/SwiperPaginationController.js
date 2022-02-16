import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import { useSwiper } from "swiper/react";

const SwiperPaginationController = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-pagination-controller">
      <span className="current-index">
        {swiper.activeIndex + 1}/{swiper.slides.length}
      </span>
      <div className="controller-wrapper">
        <span className="previous-button">
          <FontAwesomeIcon icon={All.faChevronLeft} />
        </span>
        <span className="play">
          <FontAwesomeIcon icon={All.faPlay} />
        </span>
        <span className="next-button">
          <FontAwesomeIcon icon={All.faChevronRight} />
        </span>
      </div>
    </div>
  );
};

export default SwiperPaginationController;

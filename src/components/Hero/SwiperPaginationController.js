import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import { useSwiper } from "swiper/react";
import { useState } from "react";
import styled from "styled-components";

const StyledController = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 135px;
  height: 36px;
  font-size: 0.825rem;
  color: #fff;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 1rem;

  .current-index {
    font-size: 0.875rem;
  }

  .controller-wrapper {
    font-size: 0.875rem;
    display: flex;
    justify-content: space-between;
    width: 50px;
  }
`;

const SwiperPaginationController = ({ length }) => {
  const swiper = useSwiper();
  const [currentIndex, setCurrentIndex] = useState(1);

  const renderCurrentIndex = () => {
    setCurrentIndex(swiper.activeIndex + 1);
  };

  return (
    <StyledController className="swiper-pagination-controller">
      <span className="current-index">
        {currentIndex}/{length}
      </span>
      <div className="controller-wrapper">
        <span onClick={renderCurrentIndex} className="swiper-prev">
          <FontAwesomeIcon icon={All.faChevronLeft} />
        </span>
        <span className="play">
          <FontAwesomeIcon icon={All.faPlay} />
        </span>
        <span onClick={renderCurrentIndex} className="swiper-next">
          <FontAwesomeIcon icon={All.faChevronRight} />
        </span>
      </div>
    </StyledController>
  );
};

export default SwiperPaginationController;

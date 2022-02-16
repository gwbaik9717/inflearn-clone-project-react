import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import SwiperPaginationController from "./SwiperPaginationController";

const PaginationController = () => {
  return (
    <div className="pagination-controller">
      <div className="container">
        <SwiperPaginationController />
        <div className="divider"></div>
        <div className="swiper-pagination-wrapper">
          <div className="swiper-pagination"></div>
        </div>
        <button className="btn">
          <FontAwesomeIcon icon={All.faChevronUp} />
        </button>
      </div>
    </div>
  );
};

export default PaginationController;

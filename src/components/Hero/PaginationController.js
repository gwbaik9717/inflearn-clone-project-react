import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import SwiperPaginationController from "./SwiperPaginationController";
import styled from "styled-components";

const StyledController = styled.div`
  border-bottom: 1px solid #e9ecef;
  height: 64px;

  .container {
    display: grid;
    padding: 13.5px 10px 0 10px;
    grid-template-columns: 135px 33px 1fr 52px;
    height: 100%;
  }

  .divider {
    width: 1px;
    height: 36px;
    margin: 0 1rem;
    background-color: #dee2e6;
  }

  .swiper-pagination-wrapper {
    height: 36px;
    position: relative;
  }

  .swiper-pagination {
    height: 36px;
    display: flex;
    width: 100%;
    bottom: 0;
  }

  .btn {
    margin-left: 1rem;
    padding: 1px 6px;
    border: 1px solid rgb(206, 212, 218);
    border-radius: 50%;
    font-size: 1rem;
    color: #495057;
    width: 36px;
    height: 36px;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  }

  .swiper-pagination-bullet {
    padding: 16px;
    text-align: center;
    font-weight: 700;
    font-size: 0.875rem;
    height: 36px;
    color: #495057;
    border-radius: 20px;
    cursor: pointer;
    background-color: #fff;
    width: auto;
    margin-left: 8px;
    display: flex;
    align-items: center;
    border: 1px solid rgb(206, 212, 218);
    box-shadow: rgb(206, 212, 218) 0px 0px 0px 1px inset;
    opacity: 1;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const PaginationController = ({ length }) => {
  return (
    <StyledController className="pagination-controller">
      <div className="container">
        <SwiperPaginationController length={length} />
        <div className="divider"></div>
        <div className="swiper-pagination-wrapper">
          <div className="swiper-pagination"></div>
        </div>
        <button className="btn">
          <FontAwesomeIcon icon={All.faChevronUp} />
        </button>
      </div>
    </StyledController>
  );
};

export default PaginationController;

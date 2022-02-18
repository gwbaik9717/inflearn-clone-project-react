import styled from "styled-components";

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;

  .pagination-cover {
    display: inline-flex;
    align-items: center;
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 6px;
    font-weight: 700;
    font-size: 13px;
    min-width: 28px;
    height: 28px;
    margin-left: 2px;
  }

  .is-current {
    box-shadow: inset 0 0 0 1px #ced4da;
    color: #00c471;
  }

  .next {
    margin-left: 20px;
    padding: 0;
    height: auto;
  }

  .icon {
    width: 16px;
    height: 16px;
  }
`;

const RoadmapMainPagination = () => {
  return (
    <StyledPagination className="panel-pagination">
      <ul className="pagination-cover">
        <a href="#" className="is-current">
          1
        </a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">7</a>
        <a href="#" className="next">
          <span>다음</span>
          <span className="icon">
            <svg
              width="6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 7 12"
            >
              <path
                fill="#212529"
                fillRule="evenodd"
                d="M6.834 5.602L1.298.165c-.22-.22-.578-.22-.799 0L.166.498c-.221.22-.221.576 0 .797L4.973 6 .17 10.705c-.22.22-.22.577 0 .797l.334.333c.22.22.578.22.799 0l5.535-5.437c.217-.22.217-.576-.004-.796z"
              ></path>
            </svg>
          </span>
        </a>
      </ul>
    </StyledPagination>
  );
};

export default RoadmapMainPagination;

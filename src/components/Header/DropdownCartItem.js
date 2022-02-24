import styled from "styled-components";

const StyledLecture = styled.a`
  margin-bottom: 8px;
  display: flex;
  padding: 0 8px;
  height: auto !important;

  .thumbnail {
    width: 128px;
    height: 83px;
    overflow: hidden;
    margin-right: 8px;
  }

  p {
    font-size: 16px;
  }

  .lecture-detail {
    flex: 1 1 auto;
  }

  .lecture-title {
    font-weight: 600;
    margin-bottom: 8px;
  }

  .lecture-price {
    text-align: right;
    color: #4a4a4a;
  }
`;

const DropdownCartItem = ({ title, price, thumbnail }) => {
  return (
    <StyledLecture className="lecture" href="#">
      <div className="thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="lecture-detail">
        <p className="lecture-title">{title}</p>
        <p className="lecture-price">{price}</p>
      </div>
    </StyledLecture>
  );
};

export default DropdownCartItem;

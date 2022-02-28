import styled from "styled-components";

const StyledCard = styled.div`
  margin: 2px 2px 2px ${({ index }) => (index ? "20px" : "2px")};
  max-width: 32.2%;
  width: 100%;

  .card-title {
    overflow: hidden;
    margin-bottom: 4px;
    color: #333;
    font-size: 1.125rem;
    font-weight: 600;
    text-overflow: ellipsis;
    line-height: 1.5;
    white-space: nowrap;
  }

  .card-desc {
    height: 3rem;
    width: 100%;
    font-size: 1rem;
    overflow: hidden;
    font-weight: 400;
    color: #595959;
    text-overflow: ellipsis;
  }

  .image {
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    border-radius: 3px;
    overflow: hidden;
    display: flex;
    margin-bottom: 20px;
    position: relative;
    align-items: center;
    padding-bottom: 52.3%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 280px;
    max-width: 280px;
    .card-title {
      margin-bottom: 2px;
      font-size: 1rem;
    }

    .card-desc {
      font-size: 0.9375rem;
      overflow: hidden;
    }

    img {
    }
  }
`;

const CurationCard = ({ title, img, desc, index }) => {
  return (
    <StyledCard index={index} className="curation-card">
      <a href="#">
        <span className="image">
          <img src={img} alt={title} />
        </span>

        <div className="card-title">{title}</div>
        <div className="card-desc">{desc}</div>
      </a>
    </StyledCard>
  );
};

export default CurationCard;

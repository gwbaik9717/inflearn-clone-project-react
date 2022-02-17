import styled from "styled-components";

const StyledCard = styled.div`
  margin: 2px 2px 2px ${({ index }) => (index ? "20px" : "2px")};
  max-width: 32.2%;

  .card-title {
    overflow: hidden;
    margin-bottom: 4px;
    color: #333;
    font-size: 1.125rem;
    font-weight: 600;
  }

  .card-desc {
    height: 3rem;
    font-size: 1rem;
    overflow: hidden;
    font-weight: 400;
    color: rgb(89, 89, 89);
  }

  img {
    margin-bottom: 20px;
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

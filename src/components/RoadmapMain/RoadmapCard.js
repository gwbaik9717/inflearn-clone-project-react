import styled from "styled-components";

const StyledCard = styled.div`
  width: calc(100% / 3);
  padding: 0.75rem;

  .card-wrapper {
    height: 100%;
    box-shadow: 0 2px 3px rgb(0 10 18 / 10%), 0 0 0 1px rgb(0 10 18 / 10%);
    color: #454545;
    max-width: 100%;
    position: relative;
  }

  .card-image {
    position: relative;
  }

  img {
    max-width: 100%;
  }

  .card-detail {
    padding: 1.5rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.8888em;
    color: #363636;
    line-height: 1.125;
  }

  .author {
    color: #495057;
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

const RoadmapCard = ({ title, author, img }) => {
  return (
    <StyledCard className="card-container">
      <div className="card-wrapper">
        <a href="#" className="card">
          <div className="card-image">
            <img src={img} alt={title} />
          </div>
          <div className="card-detail">
            <div className="content">
              <h3>{title}</h3>
              <span className="author">By {author}</span>
            </div>
          </div>
        </a>
      </div>
    </StyledCard>
  );
};

export default RoadmapCard;

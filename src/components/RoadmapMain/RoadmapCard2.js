import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";

const StyledCard2 = styled.div`
  position: relative;
  padding: 16px;
  border: 1px solid #eee;
  background-color: #fff;

  .card-header {
    color: #757575;
  }

  .card-main {
    display: flex;
    justify-content: space-between;
    max-height: 80px;
    max-width: 1440px;
  }

  h3 {
    font-size: 18px;
    font-weight: 800;
    color: #333;
  }

  .category-type {
    display: flex;
    min-width: 72px;
    justify-content: flex-end;
  }

  .type-cover {
    background-color: ${({ iconBg }) => iconBg || null};
    color: ${({ iconColor }) => iconColor || null};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  .card-footer {
    color: #929292;
    font-size: 14px;
    display: flex;
    margin-top: 16px;
  }

  .card-footer > div:last-child {
    margin-left: 1rem;
  }

  .card-footer span {
    margin-left: 4px;
  }
`;

const RoadmapCard2 = ({
  title,
  author,
  students,
  likes,
  icon,
  iconColor,
  iconBg,
}) => {
  return (
    <StyledCard2 className="card" iconColor={iconColor} iconBg={iconBg}>
      <a href="#">
        <div className="card-content">
          <div className="card-header">by {author}</div>
          <div className="card-main">
            <h3>{title}</h3>
            {icon && (
              <div className="category-type">
                <div className="type-cover">{icon}</div>
              </div>
            )}
          </div>
          <div className="card-footer">
            <div>
              <FontAwesomeIcon icon={All.faUser} />
              <span>{students}</span>
            </div>

            <div>
              <FontAwesomeIcon icon={All.faHeart} />
              <span>{likes}</span>
            </div>
          </div>
        </div>
      </a>
    </StyledCard2>
  );
};

export default RoadmapCard2;

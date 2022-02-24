import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";

const StyledCard = styled.div`
  background-color: #fff;
  position: relative;
  border: 1px solid #e9ecef;
  box-shadow: 0 8px 18px -5px rgb(23 39 75 / 5%);
  border-radius: 4px;
  width: 100%;
  height: 100%;

  .card-body {
    padding: 1.5rem;
    margin-bottom: 5rem;
  }

  .mentor-image {
    width: 60px;
    height: 60px;
  }

  .mentor-image > img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  .rating {
    color: #f9390f;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    border-radius: 4px;
    background: rgba(255, 210, 77, 0.2);
    cursor: pointer;
    max-width: 78px;
    text-align: center;
  }

  .rating > .icon {
    width: 18px;
    height: 24px;
    margin-top: -0.1rem;
  }

  .rating-number {
    margin-left: 0.25rem;
    font-size: 0.75rem;
  }

  .has-opacity {
    color: rgba(249, 57, 15, 0.48);
  }

  .mentor-info {
    margin-top: 1rem;
  }

  h3 {
    font-size: 1rem;
    color: #212529;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -0.3px;
    max-height: 3rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .author {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: #adb5bd;
  }

  .card-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .buttons {
    margin-bottom: -0.5rem;
    display: flex;
    align-items: center;
    justfiy-content: flex-start;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 1rem 0;
    border: 1px solid #f1f3f5;
    font-size: 15px;
    color: #000;
    border-width: 1px 0 0;
    background-color: transparent;
    margin-bottom: 8px;
  }

  .btn: first-child {
    border-right-width: 1px;
  }

  .btn: last-child {
    flex: 1 0 25%;
  }
`;

const MentorCard = ({ profile, title, name, rating }) => {
  return (
    <StyledCard className="mentor-card">
      <div className="card-body">
        <div className="mentor-image">
          <img src={profile} alt={title}></img>
        </div>

        {rating && (
          <div className="rating">
            <span className="icon">
              <FontAwesomeIcon icon={All.faStar} />
            </span>

            <span className="rating-number">
              {rating}

              <span className="has-opacity">
                /5
                <FontAwesomeIcon icon={All.faChevronRight} />
              </span>
            </span>
          </div>
        )}

        <div className="mentor-info">
          <h3>{title}</h3>
          <span className="author">by.{name}</span>
        </div>
      </div>

      <div className="card-bottom">
        <div className="buttons">
          <button className="btn">프로필</button>
          <button className="btn">내용보기</button>
        </div>
      </div>
    </StyledCard>
  );
};

export default MentorCard;

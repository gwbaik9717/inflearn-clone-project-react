import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import CloseX from "../../img/CloseX";

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

  .buttons .btn {
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

  .buttons .btn:first-child {
    border-right-width: 1px;
  }

  .buttons .btn:last-child {
    flex: 1 0 25%;
  }
`;

const StyledApplyModal = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
overflow:hidden;
position: fixed;
z-index:80;
top: 0;
left: 0;
right: 0;
bottom: 0;

.dimmed{
    position: absolute;
    background: rgba(11,19,30,.37);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display:block;
}

.apply-mentoring-container{
    display:flex;
    flex-direction: column;
    position: relative;
    bottom: 0;
    overflow:hidden;
    padding: 32px;
    width: 500px;
    max-height: 700px;
    border-radius: 8px;
    background: #fff;
}

.apply-mentoring-wrapper{
    display: flex;
    flex-direction: column;
    height: 100%;
}

.apply-mentoring-header{
    display: flex;
    justify-content: space-between;
    align-items:center;
    width: 100%;
}

.header-left{
    
}

.header-left > h1{
    margin-right: 8px;
    color: #343a40;
    font-size: 18px;
    font-weight: 700;
    line-height; 1.39;
    letter-spacing: -.3px;
}

.header-right{

    display: flex;
}

.header-right .btn{
    
}

.header-right .btn:first-child {
    margin-right: 6px;
    width: 60px;
}

.header-right .btn:first-child > span:first-child{
    margin-right: 4px;
    font-size: 16px;
    width: 16px;
    height: 24px;
}

.header-right .btn:first-child > span:last-child{
    line-height: 1.43;
    letter-spacing: -.3px;
    font-size: 14px;
    font-weight: 500;
    color: #3e4042;
    text-decoration: underline;
    text-underline-offset: 1px;
}

.header-right .btn:last-child{



}

.apply-mentoring-body{
    display: flex;
    flex-direction: column;
    flex:1;
    margin: 16px 0 6px;
    height: 100%;
    font-size: 15px;
    line-height: 1.47;
    letter-spacing: -.3px;
    color: #495057;
    overflow-x:hidden;
    overflow-y:auto;
}


.apply-mentoring-title{
    margin-bottom: 1rem;
    padding: .5rem;
    background-color: #f8f9fa;
}

.apply-mentoring-title > h3{
    line-height: 1.5;
    font-size: 16px;
    font-weight: 700;
}

.apply-mentoring-desc{
    position:relative;
    overflow-y: hidden;
    flex-direction: column;
    height: 100%;
}

.apply-mentoring-desc::after{
    content: "";
    position: absolute;
    left: 0;
    bottom:0;
    width:100%;
    height: 27px;
    background-image: linear-gradient(180deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.5),#fff);
}

.apply-mentoring-desc > div{
    overflow-y:auto;
    height:100%;
    position: relative;
    font-size:15px;
    line-height: 1.47;
    letter-spacing: -.3px;
}

.apply-mentoring-info{
    flex-shrink: 0;
    padding-top: 13px;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.47;
    letter-spacing: -.3px;
}

.apply-mentoring-info p{
    font-size: 16px;
}

.apply-mentoring-footer{
    display: flex;
    justify-content: flex-end;
}

.apply-mentoring-footer .btn{
    width: 90px;
    font-weight: 700;
    border: 1px solid #00c471;
    color: #fff;
    background: #00c471;
    border-radius: 4px;
    padding: 0 12px;
    height: 40px;
    line-height: 1.43;
    font-size: 14px;
    letter-spacing: -.3px;
}
`;

const StyledReviewModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  z-index: 80;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .dimmed {
    position: absolute;
    background: rgba(11, 19, 30, 0.37);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
  }

  .review-mentoring-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    overflow: hidden;
    max-width: 520px;
    height: 95%;
  }

  .review-mentoring-header {
    position: relative;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    padding: 20px;
    background-color: #fff;
  }

  .review-mentoring-header .btn {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    font-size: 1.25rem;
    padding: 1px 6px;
  }

  .apply-mentoring-body {
    background: #fff;
    height: 100%;
    font-size: 15px;
    line-height: 1.47;
    letter-spacing: -0.3px;
    color: #495057;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 20px;
    padding-bottom: 0;
  }

  .reviews {
    color: #000a12;
  }

  .reviews h4 {
    font-size: 1.5rem;
    margin-bottom: 0.8em;
  }

  .reviews p {
    margin-bottom: 1em;
    font-size: 16px;
  }

  .apply-mentoring-footer {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    padding: 20px;
    position: relative;
    background: #fff;
  }
`;

const MentorCard = ({
  profile,
  title,
  desc,
  name,
  rating,
  duration,
  price,
  studentNum,
  reviews,
}) => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const renderStars = (num) => {
    let stars = "";
    for (let i = 0; i < num; i++) {
      stars += "⭐️";
    }

    return stars;
  };

  const openApplyModal = () => {
    setIsApplyModalOpen(true);

    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const closeApplyModal = () => {
    setIsApplyModalOpen(false);

    document.body.style.overflow = "unset";
  };

  const openReviewModal = () => {
    setIsReviewModalOpen(true);

    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const closeReviewModal = () => {
    setIsReviewModalOpen(false);

    document.body.style.overflow = "unset";
  };

  return (
    <StyledCard className="mentor-card">
      <div className="card-body">
        <div className="mentor-image">
          <img src={profile} alt={title}></img>
        </div>

        {rating && (
          <div className="rating" onClick={openReviewModal}>
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
          <button className="btn" onClick={openApplyModal}>
            내용보기
          </button>
        </div>
      </div>

      {isApplyModalOpen && (
        <StyledApplyModal
          className="apply-mentoring-modal"
          isApplyModalOpen={isApplyModalOpen}
        >
          <div className="dimmed"></div>
          <div className="apply-mentoring-container">
            <div className="apply-mentoring-wrapper">
              <div className="apply-mentoring-header">
                <div className="header-left">
                  <h1>멘토링 소개</h1>
                </div>
                <div className="header-right">
                  <div className="btn">
                    <span className="icon">
                      <FontAwesomeIcon icon={All.faShareNodes} />
                    </span>
                    <span>공유</span>
                  </div>
                  <div className="btn" onClick={closeApplyModal}>
                    <CloseX />
                  </div>
                </div>
              </div>
              <div className="apply-mentoring-body">
                <div className="apply-mentoring-title">
                  <h3>{title}</h3>
                </div>

                <div className="apply-mentoring-desc">
                  <div>{desc}</div>
                </div>

                <div className="apply-mentoring-info">
                  <p>
                    1회 멘토링 :
                    <span className="duration">&nbsp;{duration}시간</span>
                    &nbsp;/&nbsp;
                    <span className="price">{price}원</span>
                    &nbsp;/&nbsp;
                    <span className="studentNum">{studentNum}명</span>
                  </p>
                </div>
              </div>
              <div className="apply-mentoring-footer">
                <div className="btn">
                  <span>신청하기</span>
                </div>
              </div>
            </div>
          </div>
        </StyledApplyModal>
      )}

      {rating && isReviewModalOpen && (
        <StyledReviewModal
          className="review-mentoring-modal"
          isReviewModalOpen={isReviewModalOpen}
        >
          <div className="dimmed" onClick={closeReviewModal}></div>
          <div className="review-mentoring-container">
            <div className="review-mentoring-header">
              <h1></h1>
              <div className="btn" onClick={closeReviewModal}>
                <FontAwesomeIcon icon={All.faTimes} />
              </div>
            </div>
            <div className="apply-mentoring-body">
              <div className="reviews">
                {reviews.map((review) => (
                  <>
                    <h4>{renderStars(review.stars)}</h4>
                    <p>{review.content}</p>
                  </>
                ))}
              </div>
            </div>
            <div className="apply-mentoring-footer"></div>
          </div>
        </StyledReviewModal>
      )}
    </StyledCard>
  );
};

export default MentorCard;

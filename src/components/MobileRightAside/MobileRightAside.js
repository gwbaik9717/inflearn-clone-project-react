import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setIsModalOpen } from "../Redux modules/toggleMobileModal";

const StyledAside = styled.div`
  display: none;

  .profile-modal {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 0;
    color: #adb5bd;
  }

  .close-btn .icon {
    font-size: 20px;
  }

  .message-btn {
    color: #212529;
    position: relative;
  }

  .message-btn .icon {
    font-size: 20px;
  }

  .modal-info {
    padding: 1rem;
  }

  .user-info {
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
  }

  .info-left {
    width: 48px;
    height: 48px;
    margin-right: 8px;
  }

  .info-left .thumbnail {
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    position: relative;
  }

  .thumbanail img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .thumbnail-settings {
    cursor: pointer;
    background-color: rgba(33, 37, 41, 0.64);
    color: #fff;
    font-size: 12px;
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
  }

  .info-right {
    display: flex;
    flex-direction: column;
  }

  .info-right > a {
    display: flex;
    font-weight: 600;
    color: #212529;
  }

  .info-right .name {
    overflow: hidden;
    max-height: 3rem;
  }

  .info-right .icon {
    display: inline-flex;
    width: 16px;
    height: 16px;
    font-size: 12px;
    margin-left: 2px;
    margin-top: 6px;
    flex-shrink: 0;
  }

  .info-right .rank {
    color: #495057;
    font-size: 14px;
  }

  .point-info {
    display: flex;
    width: 100%;
  }

  .point-info .value {
    color: #00c471;
    margin-right: 4px;
    font-weight: 600;
  }

  .point-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f1f3f5;
    color: #495057;
    font-size: 14px;
    border-radius: 2px;
    flex-wrap: wrap;
    padding: 8px;
  }

  .point-box .title {
    color: #495057;
    font-size: 14px;
    line-height: 1.43;
    font-weight: 500;
  }

  .point-box .content {
    line-height: 1.43;
  }

  .point-box .value {
    color: #00c471;
    margin-right: 4px;
    font-weight: 600;
  }

  .coupon {
    flex: 1;
    margin-right: 2px;
  }

  .my-points {
    flex: 2;
  }

  .modal-menu {
    display: flex;
    flex-direction: column;
    height: 0;
    flex: 1 1 auto;
  }

  .modal-menu .menu-title {
    display: flex;
  }

  .modal-menu .menu-title span {
    padding: 0.5rem;
    border-bottom: 2px solid #00c471;
    font-weight: 600;
    color: #212529;
    text-align: center;
    flex: 1;
    cursor: pointer;
  }

  .modal-menu .list-content {
    overflow-y: auto;
    height: 0;
    background-color: #f8f9fa;
    flex: 1 1 auto;
  }

  .modal-menu .list-content .menu-lists {
    padding: 16px;
  }

  .menu-lists .menu-list {
    margin-bottom: 1rem;
  }

  .menu-list a {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #212529;
    font-weight: 300;
    line-height: 1.5;
  }

  .menu-list .icon {
    font-size: 18px;
    margin-right: 8px;
  }

  .modal-footer {
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    font-size: 14px;
    color: #495057;
  }

  .cs {
    display: inline-flex;
    align-items: center;
  }

  .cs a {
    display: inline-flex;
    align-items: center;
  }

  .cs .icon {
    font-size: 14px;
    width: 16px;
    height: 16px;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: -316px;
    bottom: 0;
    width: 316px;
    height: 100%;
    z-index: 76;
    transition: transform 0.3s ease;
    background-color: #fff;
    transform: ${({ isModalOpen }) => isModalOpen && "translateX(-316px)"};
  }
`;

const MobileRightAside = () => {
  const menuLists = [
    {
      title: "이어서 학습하기",
      icon: <FontAwesomeIcon icon={All.faPlayCircle} />,
    },
    { title: "대시보드", icon: <FontAwesomeIcon icon={All.faChartPie} /> },
    { title: "내 학습", icon: <FontAwesomeIcon icon={All.faBook} /> },
    { title: "강의노트", icon: <FontAwesomeIcon icon={All.faFileInvoice} /> },
    { title: "멘토링", icon: <FontAwesomeIcon icon={All.faLightbulb} /> },
    {
      title: "작성한 게시글",
      icon: <FontAwesomeIcon icon={All.faCommentAlt} />,
    },
    { title: "더보기", icon: <FontAwesomeIcon icon={All.faEllipsisH} /> },
  ];

  const dispatch = useDispatch();
  const toggleMobileModal = () => {
    dispatch(setIsModalOpen());
  };
  const { isModalOpen } = useSelector((state) => state.toggleMobileModal);

  return (
    <StyledAside isModalOpen={isModalOpen} className="mobile-right-aside">
      <div className="profile-modal">
        <div className="modal-header">
          <span className="close-btn" onClick={toggleMobileModal}>
            <span className="icon">
              <FontAwesomeIcon icon={All.faTimes} />
            </span>
          </span>
          <a className="message-btn">
            <span className="icon">
              <FontAwesomeIcon icon={All.faBell} />
            </span>
          </a>
        </div>
        <div className="modal-info">
          <div className="user-info">
            <div className="info-left">
              <div className="thumbnail">
                <img
                  src="https://cdn.inflearn.com/public/main/profile/default_profile.png"
                  alt="profile_img"
                />
                <div className="thumbnail-settings">설정</div>
              </div>
            </div>
            <div className="info-right">
              <a href="#">
                <div className="name">
                  <FontAwesomeIcon icon={All.faHome} />
                  백건우
                </div>
                <span className="icon">
                  <FontAwesomeIcon icon={All.faChevronRight} />
                </span>
              </a>
              <div className="rank">학생</div>
            </div>
          </div>
          <div className="point-info">
            <a href="#" className="coupon point-box">
              <span className="title">쿠폰</span>
              <span className="content">
                <span className="value">0</span>개
              </span>
            </a>
            <a href="#" className="my-points point-box">
              <span className="title">포인트</span>
              <span className="content">
                <span className="value">0</span>잎
              </span>
            </a>
          </div>
        </div>

        <div className="modal-menu">
          <div className="menu-title">
            <span>학생</span>
          </div>
          <div className="list-content">
            <div className="menu-lists">
              {menuLists.map(({ title, icon }) => (
                <div className="menu-list">
                  <a href="#">
                    <span className="icon">{icon}</span>
                    <span className="menu-title">{title}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <span className="logout">로그아웃</span>
          <span className="cs">
            <a href="#">고객센터</a>
            <span className="icon">
              <FontAwesomeIcon icon={All.faChevronRight} />
            </span>
          </span>
        </div>
      </div>
    </StyledAside>
  );
};

export default MobileRightAside;
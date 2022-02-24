import styled from "styled-components";
import { useState } from "react";
import DropdownCartItem from "./DropdownCartItem";
import { Switch } from "react-router";

const StyledCart = styled.div`
  position: absolute;
  width: 442px;
  height: 420px;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgb(33 37 41 / 24%);
  background-color: #fff;
  top: 64px;
  right: -15px;
  z-index: 10;
  border: 1px solid #e0e0e0;
  display: none;

  .cart-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .header {
    display: flex;
  }

  .tab-menu {
    padding: 16px 8px 8px;
    color: #343a40;
    cursor: pointer;
    flex: 1;
    text-align: center;
  }

  .tab-menu: first-of-type {
    border-bottom: ${({ isWishList }) =>
      isWishList ? "2px solid #e9ecef" : "2px solid #00c471"};
  }

  .tab-menu: last-of-type {
    border-bottom: ${({ isWishList }) =>
      isWishList ? "2px solid #00c471" : "2px solid #e9ecef"};
  }

  .main-content {
    display: flex;
    flex-direction: column;
    padding: 16px;
    height: 100%;
  }

  .lecture-container {
    overflow-y: auto;
    margin-bottom: 8px;
    flex: 1 1 auto;
  }

  .btn {
    background-color: #00c471;
    background-color: ${({ isWishList }) =>
      isWishList ? "#FF7867" : "#00c471"};
    color: #fff;
    padding: 16px;
    font-weight: 600;
    border-radius: 4px;
    font-size: 1rem;
  }
`;

const DropdownCart = () => {
  const datas = [
    {
      title: "코딩으로 학습하는 리팩토링",
      price: "₩77,000",
      thumbnail:
        "https://cdn.inflearn.com/public/courses/328348/cover/b0523a0a-b813-4ba4-afd3-58bfa12904fb/328348-eng.png",
    },
    {
      title: "문제로 배우는 C언어",
      price: "₩33,000",
      thumbnail: "https://cdn.inflearn.com/wp-content/uploads/ktw_new2.jpg",
    },
  ];
  const [isWishList, setIsWishList] = useState(false);
  const SwitchToCart = () => {
    setIsWishList(false);
  };

  const SwitchToWishList = () => {
    setIsWishList(true);
  };

  return (
    <StyledCart isWishList={isWishList} className="cart-dropdown">
      <div className="cart-container">
        <div className="header">
          <span class="tab-menu" onClick={SwitchToCart}>
            수강바구니
          </span>
          <span class="tab-menu" onClick={SwitchToWishList}>
            위시리스트
          </span>
        </div>
        <div className="main-content">
          <div className="lecture-container">
            {datas.map(({ title, price, thumbnail }) => (
              <DropdownCartItem
                key={title}
                title={title}
                price={price}
                thumbnail={thumbnail}
              />
            ))}
          </div>
          <div className="btn">수강 바구니로 이동</div>
        </div>
      </div>
    </StyledCart>
  );
};

export default DropdownCart;

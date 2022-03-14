import styled from "styled-components";
import { useState } from "react";
import DropdownCartItem from "./DropdownCartItem";
import { Switch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { courseData } from "../../data/dummydatas";

const DropdownCart = () => {
  const { cart, wishlist } = useSelector((state) => state.setLoginInfo);

  const [isWishList, setIsWishList] = useState(false);
  const SwitchToCart = () => {
    setIsWishList(false);
  };

  const SwitchToWishList = () => {
    setIsWishList(true);
  };

  console.log(wishlist);

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
            {isWishList
              ? wishlist.map((courseID) => {
                  const [{ title, price, img }] = courseData.filter(
                    ({ id }) => id === courseID
                  );
                  return (
                    <DropdownCartItem
                      key={title}
                      title={title}
                      price={price}
                      thumbnail={img}
                    />
                  );
                })
              : cart.map((courseID) => {
                  const [{ title, price, img }] = courseData.filter(
                    ({ id }) => id === courseID
                  );
                  return (
                    <DropdownCartItem
                      key={title}
                      title={title}
                      price={price}
                      thumbnail={img}
                    />
                  );
                })}
          </div>
          <div className="btn">
            {isWishList ? "위시 리스트로 이동" : "수강 바구니로 이동"}
          </div>
        </div>
      </div>
    </StyledCart>
  );
};

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

  .tab-menu:first-of-type {
    border-bottom: ${({ isWishList }) =>
      isWishList ? "2px solid #e9ecef" : "2px solid #00c471"};
  }

  .tab-menu:last-of-type {
    border-bottom: ${({ isWishList }) =>
      isWishList ? "2px solid #00c471" : "2px solid #e9ecef"};
  }

  .main-content {
    display: flex;
    flex-direction: column;
    padding: 16px;
    height: 100%;
    height: 0;
    flex: 1 1 auto;
  }

  .lecture-container {
    overflow-y: auto;
    margin-bottom: 8px;
    flex: 1 1 auto;
    height: 0;
  }

  .btn {
    background-color: ${({ isWishList }) =>
      isWishList ? "#FF7867" : "#00c471"};
    color: #fff;
    padding: 16px;
    font-weight: 600;
    border-radius: 4px;
    font-size: 1rem;
  }
`;

export default DropdownCart;

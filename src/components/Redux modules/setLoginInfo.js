//액션 생성 함수
export const setLoggedIn = () => ({
  type: "LOGGED_IN",
});

export const setUserCart = (cart) => ({
  type: "ADD_USER_CART",
  cart,
});

export const setUserWishList = (wishlist) => ({
  type: "ADD_USER_WISHLIST",
  wishlist,
});

//초기 상태
const initialState = {
  isLoggedIn: false,
  cart: [],
  wishlist: [],
};

//reducer
export default function setLoginInfo(state = initialState, action) {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };

    case "ADD_USER_CART":
      return {
        ...state,
        cart: [...state.cart, action.cart],
      };

    case "ADD_USER_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.wishlist],
      };

    default:
      return state;
  }
}

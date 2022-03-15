//액션 생성 함수
export const setLoggedIn = (isLoggedIn) => ({
  type: "LOGGED_IN",
  isLoggedIn,
});

export const setUserInfo = (name, uid, photoURL, email) => ({
  type: "SET_USER_INFO",
  info: {
    name: name ? name : "사용자",
    uid,
    photoURL: photoURL
      ? photoURL
      : "https://cdn.inflearn.com/public/main/profile/default_profile.png",
    email,
  },
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
  info: {
    name: "",
    uid: "",
    photoURL: "",
    email: "",
  },
  cart: [],
  wishlist: [],
};

//reducer
export default function setLoginInfo(state = initialState, action) {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };

    case "SET_USER_INFO":
      return {
        ...state,
        info: action.info,
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

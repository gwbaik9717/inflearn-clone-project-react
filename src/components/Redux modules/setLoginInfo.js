//액션 생성 함수
export const setLoggedIn = () => ({
  type: "LOGGED_IN",
});

//초기 상태
const initialState = {
  isLoggedIn: false,
};

//reducer
export default function setLoginInfo(state = initialState, action) {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };

    default:
      return state;
  }
}

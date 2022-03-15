//액션 생성 함수
export const setInit = (init) => ({
  type: "INITIALIZE_PAGE",
  init,
});

//초기 상태
const initialState = {
  init: false,
};

//reducer
export default function toggleInit(state = initialState, action) {
  switch (action.type) {
    case "INITIALIZE_PAGE":
      return {
        ...state,
        init: action.init,
      };

    default:
      return state;
  }
}

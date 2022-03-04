//액션 생성 함수
export const setIsRightModalOpen = () => ({
  type: "TOGGLE_RIGHT_MODAL",
});

export const setIsLeftModalOpen = () => ({
  type: "TOGGLE_LEFT_MODAL",
});

//초기 상태
const initialState = {
  isRightModalOpen: false,
  isLeftModalOpen: false,
};

//reducer
export default function toggleMobileModal(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_RIGHT_MODAL":
      return {
        ...state,
        isRightModalOpen: !state.isRightModalOpen,
      };

    case "TOGGLE_LEFT_MODAL":
      return {
        ...state,
        isLeftModalOpen: !state.isLeftModalOpen,
      };

    default:
      return state;
  }
}

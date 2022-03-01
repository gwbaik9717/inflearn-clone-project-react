//액션 생성 함수
export const setIsModalOpen = () => ({
  type: "TOGGLE_MODAL",
});

//초기 상태
const initialState = {
  isModalOpen: false,
};

//reducer
export default function toggleMobileModal(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };

    default:
      return state;
  }
}

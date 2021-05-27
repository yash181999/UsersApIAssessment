export const initailState = {
  userData: [],
  loading : false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        userData: action.userData,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading:action.loading,
      }  

    default:
      return state;
  }
};

export default reducer;

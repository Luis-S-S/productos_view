export const initialState = {
  loading: true,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING_FALSE':
      return {
        ...state,
        loading: false,
      };
    case 'LOADING_TRUE':
      return {
        ...state,
        loading: true,
      };
    default:
      return null;
  }
};

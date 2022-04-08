/* eslint-disable default-param-last */
export const initialState = {
  allProducts: [],
  oneProduct: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALL_PRODUCTS':
      return {
        ...state,
        allProducts: action.payload,
      };
    case 'SET_ONE_PRODUCT':
      return {
        ...state,
        oneProduct: action.payload,
      };
    default:
      return null;
  }
};

export const initialState = {
  loading: true,
};

export const reducer = (type, payload) => {
  switch (type) {
    case 'LOADING':
      return payload;
    default:
      return null;
  }
};

const setAllProducts = (products) => ({ type: 'SET_ALL_PRODUCTS', payload: products });
const setOneProduct = (product) => ({ type: 'SET_ONE_PRODUCT', payload: product });

export {
  setAllProducts,
  setOneProduct,
};

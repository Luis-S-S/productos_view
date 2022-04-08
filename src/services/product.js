const URL = 'https://fakestoreapi.com';

async function getAllProducts() {
  try {
    const data = await fetch(`${URL}/products`);
    const products = await data.json();
    return products;
  } catch (error) {
    throw new Error(error);
  }
}

export default getAllProducts;

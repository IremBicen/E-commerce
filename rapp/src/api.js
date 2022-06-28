import axios from "axios";

export const fetchProductList = async () => {
  const { data } = await axios.get(
    "https://fakestoreapi.com/products/category/jewelery"
  );

  return data;
};

export const fetchProduct = async (id) => {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/category/jewelery${id}`
  );

  return data;
};

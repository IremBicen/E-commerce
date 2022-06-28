import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProductList } from "../../api";
import { Text, Button } from "@chakra-ui/react";
import { useBasket } from "../../contexts/BasketContext";

function ProductDetail() {
  const { product_id } = useParams();
  const { addToBasket, items } = useBasket();

  const { isLoading, isError, data } = useQuery(["product", product_id], () =>
    fetchProductList(product_id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error.</div>;
  }

  const findBasketItem = items.find((item) => item._id === product_id);

  return (
    <div>
      <Button
        colorScheme={findBasketItem ? "pink" : "green"}
        onClick={() => addToBasket(data, findBasketItem)}
      >
        {findBasketItem ? "Remove from basket" : "Add to basket"}
      </Button>
      <Text as="h2" fontSize="2xl">
        {data[product_id - 5].title}
      </Text>
      <p>{data[product_id - 5].description}</p>
      <p>{data[product_id - 5].price}</p>
    </div>
  );
}

export default ProductDetail;

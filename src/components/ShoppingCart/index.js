import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid/Grid";

import {
  CartGridContainer,
  CartHeader,
  EmptyCartGrid,
  CartDetails,
  CardAmountGrid,
  CartAmountPaper,
  AmountText,
} from "./styles";
import SelectedProductCard from "../ShoppingCartItem";

const getTotal = (arr) => {
  return arr.reduce((acc, val) => acc + +val.price, 0).toFixed(2);
};

const ShoppingCart = ({ products, onProductRemove }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = getTotal(products);
    setTotal(sum);
  }, [products]);
  return (
    <Grid container>
      <CartGridContainer item xs={12}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12}>
            <CartHeader variant="h5">My Cart</CartHeader>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {products.map((product) => (
                <Grid key={product.id} item xs={12}>
                  <SelectedProductCard
                    product={product}
                    onRemove={onProductRemove}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <EmptyCartGrid item xs={12}>
            {products.length === 0 && (
              <>
                <img src="./shoppingCart.png" alt="Empty Cart" />
                <CartDetails variant="h5">
                  Your personal cart is empty
                </CartDetails>
              </>
            )}
          </EmptyCartGrid>
        </Grid>
      </CartGridContainer>
      <CardAmountGrid item xs={12}>
        <CartAmountPaper>
          <AmountText variant="h5">Total: ${total}</AmountText>
        </CartAmountPaper>
      </CardAmountGrid>
    </Grid>
  );
};

export default ShoppingCart;

import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "./ProductCard.scss";

const ProductCard = ({ product, onSelect }) => {
  const { id, name, price, image } = product;
  return (
    <Grid key={id} item xs={3} className="card-content">
      <Paper>
        <img src={`./${image}`} className="product-image" alt="logo" />
        <Typography variant="subtitle1">
          {name}
        </Typography>
        <Typography color="error" >
          ${price}
        </Typography>
        <Button variant="contained" color="primary" className="add-product" onClick={() => onSelect(product)}>
          Add to cart
        </Button>
      </Paper>
    </Grid>
  );
};

export default ProductCard;

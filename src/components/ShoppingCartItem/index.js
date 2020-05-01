import React from "react";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";

import { ProductDetailsGrid, ProductImage } from "./styles";

const SelectedProductCard = ({ product, onRemove }) => {
  const { name, price, image } = product;
  return (
    <Paper>
      <Grid container spacing={1} justify="flex-start" alignItems="center">
        <Grid item>
          <ProductImage src={`./${image}`} alt="logo" />
        </Grid>
        <ProductDetailsGrid item>
          <Typography variant="subtitle1">{name}</Typography>
          <Typography color="error">{price}</Typography>
        </ProductDetailsGrid>
        <Grid item>
          <IconButton aria-label="cancel" onClick={() => onRemove(product)}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SelectedProductCard;

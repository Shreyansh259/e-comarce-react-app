import React, {useEffect} from "react";
import Grid from "@material-ui/core/Grid/Grid";

import ProductCard from "../ProductCard";

const ProductList = (props) => {
  const { products, onProductSelect } = props;
  useEffect(() => {

  }, [products])
    return (
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {products.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={onProductSelect}></ProductCard>
        ))}
      </Grid>
    );
};

export default ProductList;


import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";

import {
  MainContent,
  SearchSection,
  SearchInput,
  SortSelect,
  ProductGrid,
} from "./styles";
import ProductList from "../../components/ProductList";
import getProductList from "../../apis/fetchProductList";
import ShoppingCart from "../../components/ShoppingCart";

const ProductPage = () => {
  const [productList, setProductList] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [activeSort, setActiveSort] = useState("bestMatch");

  const getProducts = async () => {
    setProductList(await getProductList());
  };

  useEffect(() => {
    const selectedProductsJson = window.localStorage.getItem(
      "selectedProducts"
    );
    if (selectedProductsJson) {
      setSelectedProducts(JSON.parse(selectedProductsJson));
    }
    getProducts();
  }, []);

  const onSort = ({ target }) => {
    let sortedArray;
    if (target.value === "highestPriceFirst") {
      sortedArray = productList.slice(0).sort((a, b) => +b.price - +a.price);
      setProductList(sortedArray);
    } else if (target.value === "lowestPriceFirst") {
      sortedArray = productList.slice(0).sort((a, b) => +a.price - +b.price);
      setProductList(sortedArray);
    } else {
      getProducts();
    }
    setActiveSort(target.value);
  };

  const onSearch = async ({ target }) => {
    const availableProducts = await getProductList();
    const regex = new RegExp(target.value, "i");
    const result = availableProducts.filter((s) => regex.test(s.name.trim()));
    setProductList(result);
  };

  const updateSelectedProduct = (data) => {
    window.localStorage.setItem("selectedProducts", JSON.stringify(data));
    setSelectedProducts(data);
  };

  const onRemove = ({ id }) => {
    const result = selectedProducts.slice(0).filter((s) => s.id !== id);
    updateSelectedProduct(result);
  };

  const addToCart = (product) => {
    let arr = [...selectedProducts, product];
    const result = Array.from(new Set(arr.map((x) => x.id))).map((id) =>
      arr.find((s) => s.id === id)
    );
    updateSelectedProduct(result);
  };

  return (
    <Container maxWidth="xl">
      <MainContent
        justify="space-between"
        container
        spacing={6}
        alignContent="space-between"
      >
        <Grid item xs={7}>
          <SearchSection>
            <Grid container spacing={2}>
              <Grid item xs={9}>
                <SearchInput
                  fullWidth
                  label="Search"
                  variant="outlined"
                  onChange={onSearch}
                />
              </Grid>
              <Grid item xs={3}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel>Sort By</InputLabel>
                  <SortSelect
                    value={activeSort}
                    onChange={onSort}
                    label="Sort By"
                  >
                    <MenuItem value="bestMatch">Best Match</MenuItem>
                    <MenuItem value="lowestPriceFirst">
                      Price: Lowest First
                    </MenuItem>
                    <MenuItem value="highestPriceFirst">
                      Price: Highest First
                    </MenuItem>
                  </SortSelect>
                </FormControl>
              </Grid>
            </Grid>
          </SearchSection>
          <ProductList products={productList} onProductSelect={addToCart} />
        </Grid>
        <ProductGrid item xs={4}>
          <ShoppingCart
            products={selectedProducts}
            onProductRemove={onRemove}
          />
        </ProductGrid>
      </MainContent>
    </Container>
  );
};

export default ProductPage;

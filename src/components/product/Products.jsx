import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product";

function Products({ products, handleAddToCart }) {
  return (
    <main style={{ paddingTop: "12vh", overflow: "hidden" }}>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((obj) => (
          <Grid item key={obj.id} xs={12} sm={6} md={4} lg={3}>
            <Product obj={obj} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;

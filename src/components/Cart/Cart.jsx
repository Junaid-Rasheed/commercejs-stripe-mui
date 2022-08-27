import React from "react";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
function Cart({ cart, handleCartQty, handleEmptyCart, handleRemoveFromCart }) {
  const isEmpty = !cart.total_unique_items;

  return (
    <Container style={{ paddingTop: "15vh" }}>
      <Typography variant="h4" gutterBottom>
        Your Shopping Cart
      </Typography>
      {isEmpty ? (
        <Typography variant="subtitle1">
          You have no items in your shopping cart, start adding some!
        </Typography>
      ) : (
        <>
          <Grid
            container
            spacing={3}
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            {cart.line_items.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <CartItem
                  item={item}
                  handleCartQty={handleCartQty}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              </Grid>
            ))}
          </Grid>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" style={{ fontSize: "30px" }}>
              SubTotal : {cart.subtotal.formatted_with_symbol}
            </Typography>
            <div>
              <Button
                size="large"
                type="button"
                variant="contained"
                color="secondary"
                style={{ marginRight: "12px" }}
                onClick={handleEmptyCart}
              >
                Empty Cart
              </Button>
              <Button
                size="large"
                type="button"
                variant="contained"
                color="primary"
                component={Link}
                to="/checkout"
              >
                Checkout
              </Button>
            </div>
          </div>
        </>
      )}
    </Container>
  );
}

export default Cart;

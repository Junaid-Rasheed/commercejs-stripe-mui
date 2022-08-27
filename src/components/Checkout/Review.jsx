import React from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";

function Review({ checkoutToken }) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      <List disablePadding xs={12} sm={6}>
        {checkoutToken.line_items.map((product) => (
          <ListItem style={{ padding: "0px 10px" }} key={product.name}>
            <ListItemText
              primary={product.name}
              secondary={`Quantity:${product.quantity}`}
            />
            <Typography variant="body2">
              {product.line_total.formatted_with_symbol}
            </Typography>
          </ListItem>
        ))}

        <ListItem style={{ padding: "0px 10px", fontWeight: 700 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1">
            {checkoutToken.subtotal.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>
    </>
  );
}

export default Review;

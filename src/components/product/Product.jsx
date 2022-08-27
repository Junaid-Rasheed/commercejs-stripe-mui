import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

// import useStyles from './styles'

function Product({ obj, handleAddToCart }) {
  // const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="160"
        image={obj.image.url}
        alt="Image"
      />
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography gutterBottom variant="h5">
            {obj.name}
          </Typography>
          <Typography variant="h5">
            {obj.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: obj.description }}
          variant="body2"
          color="text.secondary"
        />
      </CardContent>
      <CardActions disableSpacing style={{ display: "flex", float: "right" }}>
        <IconButton
          aria-label="Add to Cart"
          onClick={() => handleAddToCart(obj.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Product;

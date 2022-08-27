import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

function Navbar({ totalItems }) {
  const location = useLocation();
  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            component={Link}
            to="/"
            variant="h5"
            color="inherit"
            style={{
              letterSpacing: "1px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <img
              alt="logo"
              style={{ marginRight: "12px" }}
              height="35px"
              src="https://www.designfreelogoonline.com/wp-content/uploads/2016/07/000749-online-store-logos-design-free-online-E-commerce-cart-logo-maker-02.png"
            />
            E-MERCE.
          </Typography>
          <div />
          {location.pathname === "/cart" ? null : (
            <div>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show Cart Items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="primary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;

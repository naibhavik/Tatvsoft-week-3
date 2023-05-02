import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  const style = {
    ButtonContainer: {
      display: "flex",
      alignItems: "center",
    },
    button: {
      marginRight: "2px",
      marginLeft: "2px",
      color: "#f14d54",
    },
    verticalLinr: {
      content: '""',
      display: "inline-block",
      width: "1px",
      heigth: "24px",
      backgroundColor: "gray",
      marginRight: "2px",
      marginLeft: "2px",
    },
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "white",
          color: "black",
          padding: "0px 55px",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            back
            sx={{ mr: 1 }}
          ></IconButton>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1tV6t14yHTNfrJ49kuDtorFtJ6XYSl7cclWvmiRvp&s"
            alt="logo"
            style={{ height: "41px" }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button sx={{ textTransform: "none" }} style={style.button}>
            <Link to="/">Login</Link>
          </Button>
          <span style={style.verticalLine}></span>
          <Button sx={{ textTransform: "none" }} style={style.button}>
            <Link to="/Register">Register</Link>
          </Button>
          <Button
            sx={{ textTransform: "nonw" }}
            variant="outlined"
            style={{
              borderColor: "black",
              color: "black",
              fontSize: "14px",
              padding: "3px 7px",
            }}
          >
            <IconButton aria-lable="cart">
              <Badge badgeContent={4} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            &nbsp; Cart
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.85),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.95),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "422px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "422px",
      "&:focus": {
        width: "422px",
      },
    },
  },
}));

const SearchButton = styled(Button)({
  marginLeft: "10px",
  height: "40px",
});

const CancelButton = styled(Button)({
  marginLeft: "10px",
  height: "40px",
});

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={0}
        position="static"
        style={{
          backgroundColor: "#E6E6FA",
          color: "black",
          padding: "0px 0px",
          alignItems: "center",
        }}
      >
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="What are you looking for…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <SearchButton
            variant="contained"
            color="success"
            style={{
              backgroundcolor: "#80BF32",
              color: "white",
              fontSize: "16px",
              maxWidth: "129px",
            }}
            sx={{ textTransform: "none" }}
          >
            <IconButton style={{ color: "white", padding: "0px 0px" }}>
              <SearchIcon />
            </IconButton>
            Search
          </SearchButton>
          <CancelButton
            variant="contained"
            color="error"
            style={{
              backgroundcolor: "red",
              color: "white",
              fontSize: "16px",
              maxWidth: "129px",
              padding: "20px",
            }}
            sx={{ textTransform: "none" }}
          >
            Cancel
          </CancelButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

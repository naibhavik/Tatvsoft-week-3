import React, { useState } from "react";
import { Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
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
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "25ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

const columns = [
  { id: "id", label: "Id", minWidth: 100, align: "left" },
  { id: "title", label: "Title", maxWidth: 100, align: "left" },
  {
    id: "source",
    label: "Source",
    minWidth: 140,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "query",
    label: "Query",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "buttons",
    label: "",
    minWidth: 150,
    align: "right",
  },
];

function createData(id, title, source, query, buttons) {
  return { id, title, source, query, buttons };
}

const rows = [
  createData("12", "ISBM Followup", "Data Source 1", "Teste"),
  createData("13", "ISBM Followup", "Data Source 2", "Teste"),
  createData("24", "ISBM Followup", "Data Source 2", "Teste"),
  createData("16", "ISBM Followup", "Data Source 1", "Teste"),
  createData("21", "ISBM Followup", "Data Source 2", "Teste"),
  createData("23", "ISBM Followup", "Data Source 2", "Teste"),
];

function ProductPage() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Typography
            variant="h3"
            style={{
              textAlign: "center",
              paddingTop: "50px",
              paddingBottom: "25px",
              fontWeight: "bold",
            }}
          >
            Product Page
          </Typography>

          <Box sx={{ flexGrow: 1 }}>
            <AppBar
              elevation={0}
              position="static"
              style={{
                backgroundColor: "white",
                color: "black",
                padding: "0px 0px",
                alignItems: "flex-end",
                boxShadow: "none",
                marginBottom: "32px",
                marginTop: "45px",
              }}
            >
              <Toolbar>
                <Search
                  style={{ border: "1px solid black", paddingRight: "10px" }}
                >
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>

                <Button
                  variant="contained"
                  color="error"
                  sx={{ textTransform: "none" }}
                  style={{
                    width: "100px",
                    height: "40px",
                    marginLeft: "10px",
                    fontSize: "11px",
                  }}
                >
                  Add Product
                </Button>
              </Toolbar>
            </AppBar>
          </Box>

          <Paper sx={{ width: "100%" }}>
            <TableContainer
              sx={{ maxHeight: 440 }}
              elevation={0}
              style={{ borderBottom: "0px" }}
            >
              <Table
                stickyHeader
                aria-label="sticky table"
                elevation={0}
                style={{ borderBottom: "none" }}
              >
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}

                          <TableCell>
                            <Button
                              variant="outlined"
                              color="error"
                              style={{
                                marginRight: "10px",
                                width: "80px",
                                height: "30px",
                              }}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="outlined"
                              color="success"
                              style={{ width: "80px", height: "30px" }}
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
          <div style={{ marginBottom: "80px" }}></div>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default ProductPage;

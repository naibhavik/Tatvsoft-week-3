import React, { useState } from "react";
import { Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import * as Yup from "yup";

function EditProduct() {
  const handleEditPdtForm = (data) => {
    console.log("Form is submitted", data);
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Minimum 3 characters required")
      .required("First name is required."),
    lastName: Yup.string()
      .min(3, "Minimum 3 characters required")
      .required("Last name is required."),
  });

  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
      label: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
  ];

  return (
    <div>
      <div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleEditPdtForm}
        >
          {({
            errors,
            touched,
            handleChange,
            handleBlur,
            handleEditPdtSubmit,
          }) => (
            <form onSubmit={handleEditPdtSubmit}>
              <div
                style={{
                  width: "100%",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "100%", display: "flex" }}></div>
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
                      Edit Product
                    </Typography>
                    <Box sx={{ width: "100%", paddingTop: "20px" }}>
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        style={{ marginBottom: "20px" }}
                      >
                        <Grid item xs={6}>
                          <label>
                            <Typography
                              variant="h6"
                              style={{
                                paddingBottom: "15px",
                                fontSize: "15px",
                              }}
                            >
                              First Name*
                            </Typography>
                            <input
                              type="text"
                              name="firstName"
                              id="firstName"
                              label="Firstame"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched.firstName && errors && errors.firstName}
                          </label>
                        </Grid>
                        <Grid item xs={6}>
                          <label>
                            <Typography
                              variant="h6"
                              style={{
                                paddingBottom: "15px",
                                fontSize: "15px",
                              }}
                            >
                              Last Name*
                            </Typography>
                            <input
                              type="text"
                              name="lastName"
                              id="lastName"
                              label="LastName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched.lastName && errors && errors.lastName}
                          </label>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box sx={{ width: "100%", paddingTop: "20px" }}>
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        style={{ marginBottom: "20px" }}
                      >
                        <Grid item xs={6}>
                          <label>
                            <Typography
                              variant="h6"
                              style={{
                                paddingBottom: "15px",
                                fontSize: "15px",
                              }}
                            >
                              Shop by categories
                            </Typography>
                            <select id="catergories" name="description">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                            </select>
                          </label>
                        </Grid>
                        <Grid item xs={6}>
                          <label>
                            <Typography
                              variant="h6"
                              style={{
                                paddingBottom: "15px",
                                fontSize: "15px",
                              }}
                            >
                              Description
                            </Typography>
                            <input
                              type="text"
                              name="description"
                              id="description"
                              label="Description"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </label>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box sx={{ width: "100%", paddingTop: "20px" }}>
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        style={{ marginBottom: "20px" }}
                      >
                        <Grid item xs={6}>
                          <label>
                            <Button
                              variant="contained"
                              component="label"
                              color="error"
                              style={{
                                alignItems: "center",
                                borderRadius: "none",
                              }}
                            >
                              Upload
                              <input
                                hidden
                                accept="image/*"
                                multiple
                                type="file"
                              />
                            </Button>
                            <input
                              style={{ width: "84.4%" }}
                              type="text"
                              name="description"
                              id="description"
                              label="Description"
                              placeholder="No file chosen"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </label>
                        </Grid>
                      </Grid>
                    </Box>

                    <Button
                      variant="contained"
                      color="success"
                      sx={{
                        textTransform: "none",
                        alignItems: "center",
                        marginBottom: "80px",
                        marginRight: "10px",
                      }}
                      type="submit"
                    >
                      Save
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{
                        textTransform: "none",
                        alignItems: "center",
                        marginBottom: "80px",
                      }}
                      type="cancel"
                    >
                      Cancel
                    </Button>
                  </Container>
                </React.Fragment>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default EditProduct;

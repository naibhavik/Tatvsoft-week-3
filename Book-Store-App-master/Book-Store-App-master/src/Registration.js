import React, { useState } from "react";
import { Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Registration = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(2).max(25).required("First name is required."),
    lastName: Yup.string().min(2).max(25).required("Last name is required."),
    email: Yup.string()
      .email("Invalid email address.")
      .required("Email is required."),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters.")
      .required("Password is required."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match.")
      .required("Confirm password is required."),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
                Login or Create an Account
              </Typography>
              <Typography
                variant="h6"
                style={{ paddingTop: "50px", paddingBottom: "20px" }}
              >
                Personal Information
              </Typography>
              <Divider sx={{ bgcolor: "grey.500", height: 2 }} />
              <div style={{ fontSize: "15px" }}>
                <Typography
                  variant="h6"
                  style={{
                    paddingTop: "20px",
                    fontSize: "15px",
                    color: "gray",
                  }}
                >
                  Please enter the following information to create your account.
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
                          placeholder="Enter your First Name"
                          type="text"
                          name="firstName"
                          id="firstName"
                          label="Firstame"
                          values={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{
                            width: "100%",
                            height: "40px",
                          }}
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
                          placeholder="Enter your Last Name"
                          type="text"
                          name="lastName"
                          id="lastName"
                          label="LastName"
                          values={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{
                            width: "100%",
                            height: "40px",
                          }}
                        />
                        {touched.lastName && errors && errors.lastName}
                      </label>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} style={{ marginBottom: "10px" }}>
                    <label>
                      <Typography
                        variant="h6"
                        style={{
                          paddingBottom: "15px",
                          fontSize: "15px",
                        }}
                      >
                        Email*
                      </Typography>
                      <input
                        placeholder="Enter your Email"
                        type="email"
                        name="email"
                        id="email"
                        label="Email"
                        values={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{
                          width: "100%",
                          height: "40px",
                        }}
                      />
                      {touched.email && errors && errors.email}
                    </label>
                  </Grid>
                </Box>
              </div>

              <Typography
                variant="h6"
                style={{ paddingTop: "50px", paddingBottom: "20px" }}
              >
                Login Information
              </Typography>
              <Divider sx={{ bgcolor: "grey.500", height: 2 }} />
              <div style={{ fontSize: "15px" }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  style={{ marginBottom: "60px", marginTop: "20px" }}
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
                        Password*
                      </Typography>
                      <input
                        placeholder="Password"
                        type="password"
                        name="password"
                        id="password"
                        label="Password"
                        values={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{
                          width: "100%",
                          height: "40px",
                        }}
                      />
                      {touched.password && errors && errors.password}
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
                        Confirm Password*
                      </Typography>
                      <input
                        placeholder="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        label="ConfirmPassword"
                        values={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{
                          width: "100%",
                          height: "40px",
                        }}
                      />
                      {touched.confirmPassword &&
                        errors &&
                        errors.confirmPassword}
                    </label>
                  </Grid>
                </Grid>
              </div>
              <Button
                variant="contained"
                color="error"
                sx={{
                  textTransform: "none",
                  alignItems: "center",
                  marginBottom: "80px",
                }}
                type="submit"
              >
                Register
              </Button>
            </Container>
          </React.Fragment>
        </div>
      </form>
    </div>
  );
};

export default Registration;

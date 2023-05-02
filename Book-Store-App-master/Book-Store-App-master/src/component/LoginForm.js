import React, { useState } from "react";
import { Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const hadleForm = (data) => {
    console.log("Form is sunbmitted", data);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?username=${email}`
      );

      if (response.data.length === 0) {
        toast.error("User not Found");
        return;
      }
      const user = response.data[0];
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    }
  };

  const validationschema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Email must not be empty"),
    password: Yup.string()
      .min(8, "Minimum 8 characters required")
      .required("Enter password"),
  });

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationschema= {data => this.validationschema(data)}
        onSubmit={hadleForm}
      >
        {({ data, errors, touched, handleChange, handkeBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div
              style={{
                width: "100%",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "100%", display: "flex" }}>
                <React.Fragment>
                  <CssBaseline>
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
                        Login or create an Account
                      </Typography>
                      <Box sx={{ width: "100%", paddingTop: "20px" }}>
                        <Grid
                          container
                          rowspacing={1}
                          columnspacing={{ xs: 1, sm: 2, md: 3 }}
                        >
                          <Grid item xs={6}>
                            <Typography
                              variant="h6"
                              style={{
                                paddingTop: "50px",
                                paddingBottom: "20px",
                              }}
                            >
                              New Customer
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
                                Registration is free and easy
                              </Typography>
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "15px",
                                  paddingTop: "20px",
                                }}
                              >
                                <li>Faster Checkout</li>
                              </Typography>
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "15px",
                                  paddingTop: "15px",
                                }}
                              >
                                <li>Save multiple shipping addresses</li>
                              </Typography>
                              <Typography
                                variant="h6"
                                style={{
                                  paddingTop: "15px",
                                  paddingBottom: "160px",
                                  fontSize: "15px",
                                  paddingLeft: "0px",
                                }}
                              >
                                <li>View and track orders and more</li>
                              </Typography>
                              <Button
                                  variant="contained"
                                  color="error"
                                  sx={{
                                    textTransform: "none",
                                    alignItems: "center",
                                    marginBottom: "80px",
                                  }}
                                  type="submit"
                                  style={{ height: "45px", width: "220px" }}
                                >
                                  Create Account
                                </Button>
                            </div>
                          </Grid>
                          <Grid items xs={6}>
                            <Typography
                              variant="h6"
                              style={{
                                paddingTop: "50px",
                                paddingBottom: "20px",
                              }}
                            >
                              Registered Customers
                            </Typography>
                            <Divider sx={{ bgcolor: "grey.500", height: 2 }} />
                            <Typography
                              variant="h6"
                              style={{
                                paddingTop: "20px",
                                paddingBottom: "20px",
                                fontSize: "15px",
                                color: "gray",
                              }}
                            >
                              If you have Account with us, please log in.
                            </Typography>

                            <Grid>
                              <label>
                                <Typography
                                  variant="h6"
                                  style={{
                                    paddingBottom: "15px",
                                    fontSize: "15px",
                                  }}
                                >
                                  Email Address*
                                </Typography>
                                <input
                                  placeholder="Email Address"
                                  type="email"
                                  name="email"
                                  id="email"
                                  lang="email"
                                  onChange={handleChange}
                                  onBlur={handkeBlur}
                                  style={{
                                    width: "100%",
                                    height: "40px"
                                  }}
                                />
                                {touched.email && errors && errors.email}
                              </label>
                            </Grid>

                            <Grid
                              style={{
                                marginTop: "40px",
                                marginBottom: "60px",
                              }}
                            >
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
                                  id="password"
                                  name="password"
                                  label="password"
                                  onChange={handleChange}
                                  onBlur={handkeBlur}
                                  style={{
                                    width: "100%",
                                    height: "40px"
                                  }}
                                />
                                {touched.password && errors && errors.password}
                              </label>
                            </Grid>
                            <Button
                              variant="contained"
                              color="error"
                              sx={{
                                textTransform: "none",
                                alignItems: "center",
                                marginBottom: "80px",
                              }}
                              type="submit"
                              style={{ height: "45px", width: "100px" }}
                            >
                              Login
                            </Button> 
                          </Grid>
                          {/* <Grid
                            container
                            rowspacing={1}
                            columnspacing={{ xs: 1, sm: 2, md: 3 }}
                          >
                            <Grid items xs={6}>
                              <Button
                                variant="contained"
                                color="error"
                                sx={{
                                  textTransform: "none",
                                  alignItems: "center",
                                  marginBottom: "80px",
                                }}
                                type="submit"
                                style={{ height: "45px", width: "220px" }}
                              >
                                Create Account
                              </Button>
                            </Grid>
                            <Grid items xs={6}>
                              <Button
                                variant="contained"
                                color="error"
                                sx={{
                                  textTransform: "none",
                                  alignItems: "center",
                                  marginBottom: "80px",
                                }}
                                type="submit"
                                style={{ height: "45px", width: "100px" }}
                              >
                                Login
                              </Button>
                            </Grid>
                          </Grid> */}
                        </Grid>

                        <ToastContainer />
                      </Box>
                    </Container>
                  </CssBaseline>
                </React.Fragment>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;

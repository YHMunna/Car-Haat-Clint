import {
  Grid,
  TextField,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import login from "../../Image/login.jpg";
const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const { user, registerUser, loading, authError } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
    console.log(newRegisterData);
    e.preventDefault();
  };
  const handleRegisterSubmit = (e) => {
    if (registerData.password !== registerData.password2) {
      alert("password didn't match");
    }
    registerUser(registerData.email, registerData.password, location, history);

    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 16 }} xs={12} md={6}>
          <Typography variant="h6" gutterBottom component="div">
            Please, Register
          </Typography>
          {!loading && (
            <form onSubmit={handleRegisterSubmit}>
              <TextField
                onChange={handleOnChange}
                sx={{ width: "90%", marginBottom: "10px" }}
                id="standard-basic"
                label="Email"
                variant="standard"
                type="email"
                name="email"
              />
              <br />
              <TextField
                onChange={handleOnChange}
                sx={{ width: "90%" }}
                id="standard-password-input"
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                variant="standard"
              />
              <br />
              <TextField
                onChange={handleOnChange}
                sx={{ width: "90%" }}
                id="standard-password-input"
                label="Re-type Password"
                name="password2"
                type="password"
                autoComplete="current-password"
                variant="standard"
              />

              <Button
                type="submit"
                sx={{ width: "40%", mt: 4 }}
                variant="contained"
              >
                register
              </Button>
              <br />
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button sx={{ width: "90%", mt: 4 }} variant="text">
                  Already an User? Please login
                </Button>
              </NavLink>
            </form>
          )}
          {loading && <CircularProgress color="secondary" />}
          {user.email && (
            <Alert severity="success">Successfully Registered!</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;

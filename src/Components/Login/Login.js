import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import login from "../../Image/login.jpg";
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, loading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newloginData = { ...loginData };
    newloginData[field] = value;
    setLoginData(newloginData);
    console.log(newloginData);
    e.preventDefault();
  };
  const handleloginsubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);

    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 16 }} xs={12} md={6}>
          <Typography variant="h6" gutterBottom component="div">
            Please, Login
          </Typography>
          {!loading && (
            <form onSubmit={handleloginsubmit}>
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

              <Button
                type="submit"
                sx={{ width: "40%", mt: 4 }}
                variant="contained"
              >
                Login
              </Button>
              <br />
              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button sx={{ width: "90%", mt: 4 }} variant="text">
                  New User? Please Register
                </Button>
              </NavLink>
            </form>
          )}
          {loading && <CircularProgress color="secondary" />}
          {user.email && <Alert severity="success">Successfully login!</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;

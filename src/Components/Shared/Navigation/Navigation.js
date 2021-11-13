import React from "react";

import Button from "@mui/material/Button";

import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../../Hooks/UseAuth";
import { Box } from "@mui/system";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/home">Car Haat</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              style={{ textDecoration: "none", marginRight: "5px" }}
              to="/shop"
            >
              <Button variant="contained" color="inherit">
                Car Shop
              </Button>
            </NavLink>

            <NavLink
              style={{ textDecoration: "none", marginRight: "5px" }}
              to="/dashboard"
            >
              {/* <Button variant="contained" color="inherit">
                Dashboard
              </Button> */}
            </NavLink>
            {user.email ? (
              <Box>
                {" "}
                <NavLink
                  style={{ textDecoration: "none", marginRight: "5px" }}
                  to="/dashboard"
                >
                  <Button variant="contained" color="inherit">
                    Dashboard
                  </Button>
                </NavLink>
                <Button onClick={logOut} variant="contained" color="inherit">
                  Logout
                </Button>
              </Box>
            ) : (
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="contained" color="inherit">
                  Login
                </Button>
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

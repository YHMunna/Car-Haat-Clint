import { Alert, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import SingleCarService from "../SignleCarService/SingleCarService";

const Services = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://secure-refuge-54069.herokuapp.com/homeCars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, []);
  return (
    <Container>
      <h3
        style={{
          margin: "15px",
          padding: "15px",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {" "}
        Most Recent Car
      </h3>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {cars.map((car) => (
          <SingleCarService key={cars.id} car={car}></SingleCarService>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;

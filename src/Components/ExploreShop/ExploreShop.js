import React from "react";
import Navigation from "../Shared/Navigation/Navigation";
import chr from "../../Image/ServiceCarImage/2021-toyota.jpg";
import { Container } from "react-bootstrap";
import { Grid } from "@mui/material";
import SingleCarService from "../Home/SignleCarService/SingleCarService";

//fakedate
const cars = [
  {
    id: 1,
    name: "Toyota CH-R",
    price: "5500000",
    modelYear: "2021",
    rating: 4,
    img: chr,
  },
  {
    id: 2,
    name: "Toyota CH-R",
    price: "5500000",
    modelYear: "2021",
    rating: 4,
    img: chr,
  },
  {
    id: 3,
    name: "Toyota CH-R",
    price: "5500000",
    modelYear: "2021",
    rating: 4,
    img: chr,
  },
  {
    id: 4,
    name: "Toyota CH-R",
    price: "5500000",
    modelYear: "2021",
    rating: 4,
    img: chr,
  },
  {
    id: 5,
    name: "Toyota CH-R",
    price: "5500000",
    modelYear: "2021",
    rating: 4,
    img: chr,
  },
  {
    id: 6,
    name: "Toyota CH-R",
    price: "5500000",
    modelYear: "2021",
    rating: 4,
    img: chr,
  },
];

const ExploreShop = () => {
  return (
    <div>
      <Navigation></Navigation>
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
          Avalaible Car
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
    </div>
  );
};

export default ExploreShop;

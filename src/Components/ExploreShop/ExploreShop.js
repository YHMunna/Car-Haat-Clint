import React, { useEffect, useState } from "react";
import Navigation from "../Shared/Navigation/Navigation";
import chr from "../../Image/ServiceCarImage/2021-toyota.jpg";
import { Container } from "react-bootstrap";
import { Grid } from "@mui/material";
import SingleCarService from "../Home/SignleCarService/SingleCarService";
import { Alert, Typography } from "@mui/material";
import Footer from "../Shared/Footer/Footer";
// //fakedate
// const cars = [
//   {
//     id: 1,
//     name: "Toyota CH-R",
//     price: "5500000",
//     modelYear: "2021",
//     rating: 4,
//     img: chr,
//   },
//   {
//     id: 2,
//     name: "Toyota CH-R",
//     price: "5500000",
//     modelYear: "2021",
//     rating: 4,
//     img: chr,
//   },
//   {
//     id: 3,
//     name: "Toyota CH-R",
//     price: "5500000",
//     modelYear: "2021",
//     rating: 4,
//     img: chr,
//   },
//   {
//     id: 4,
//     name: "Toyota CH-R",
//     price: "5500000",
//     modelYear: "2021",
//     rating: 4,
//     img: chr,
//   },
//   {
//     id: 5,
//     name: "Toyota CH-R",
//     price: "5500000",
//     modelYear: "2021",
//     rating: 4,
//     img: chr,
//   },
//   {
//     id: 6,
//     name: "Toyota CH-R",
//     price: "5500000",
//     modelYear: "2021",
//     rating: 4,
//     img: chr,
//   },
// ];

const ExploreShop = () => {
  const [cars, setCars] = useState([]);
  const [orderSuccess, setOrderSuccess] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, []);
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
        {orderSuccess && (
          <Alert severity="success">Successfully Created Order!</Alert>
        )}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {cars.map((car) => (
            <SingleCarService
              key={cars.id}
              setOrderSuccess={setOrderSuccess}
              car={car}
            ></SingleCarService>
          ))}
        </Grid>
        <Footer></Footer>
      </Container>
    </div>
  );
};

export default ExploreShop;

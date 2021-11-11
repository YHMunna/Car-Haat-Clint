import React from "react";

import { Container, Grid } from "@mui/material";
import SingleReview from "../SingleReview/SingleReview";
const reviews = [
  {
    id: 1,
    name: "kudddus",
    email: "kuddus@gmail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dolores illum assumenda exercitationem illo facilis doloribus nam voluptatibus magnam quis.",
  },
  {
    id: 2,
    name: "kudddus",
    email: "kuddus@gmail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dolores illum assumenda exercitationem illo facilis doloribus nam voluptatibus magnam quis.",
  },
  {
    id: 3,
    name: "kudddus",
    email: "kuddus@gmail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dolores illum assumenda exercitationem illo facilis doloribus nam voluptatibus magnam quis.",
  },
];
const Reviews = () => {
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
        Consumer Valuable Reviews
      </h3>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {reviews.map((review) => (
          <SingleReview key={review.id} review={review}></SingleReview>
        ))}
      </Grid>
    </Container>
  );
};

export default Reviews;

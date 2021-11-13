import React, { useEffect, useState } from "react";

import { Container, Grid } from "@mui/material";
import SingleReview from "../SingleReview/SingleReview";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://secure-refuge-54069.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
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

import React from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
const SingleReview = ({ review }) => {
  return (
    <Grid xs={12} md={12}>
      <Card sx={{ marginBottom: "10px" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {review.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {review.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleReview;

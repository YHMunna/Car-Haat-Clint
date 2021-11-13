import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

const SingleBlog = ({ blog }) => {
  return (
    <Grid xs={12} md={12}>
      <Card sx={{ marginBottom: "10px" }}>
        <CardContent>
          <CardMedia
            component="img"
            height="600"
            image={blog.img}
            alt="toyota car"
          />
          <Typography variant="body1" color="text.secondary">
            {blog.details}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleBlog;

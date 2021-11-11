import { Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
const SingleCarService = ({ car }) => {
  return (
    <Grid item xs={12} md={6}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={car.img}
            alt="toyota car"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {car.name}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Price : {car.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Rating : {car.rating}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained">Purchase</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SingleCarService;

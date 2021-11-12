import { Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import PurchaseModal from "../../PurchaseModal/PurchaseModal";
const SingleCarService = ({ car }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);
  return (
    <>
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
                Model Year: {car.modelYear}
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
            <Button onClick={handleModalOpen} variant="contained">
              Purchase
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <PurchaseModal
        car={car}
        openModal={openModal}
        handleModalClose={handleModalClose}
      ></PurchaseModal>
    </>
  );
};

export default SingleCarService;

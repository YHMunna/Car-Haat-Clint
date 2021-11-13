import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useAuth from "../../Hooks/UseAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const PurchaseModal = ({
  openModal,
  handleModalClose,
  setOrderSuccess,
  car,
}) => {
  console.log(setOrderSuccess);
  const { name, price, modelYear, img } = car;
  const { user } = useAuth();
  const initialBookingInfo = {
    consumerName: user.displayName,
    email: user.email,
    phone: "",
    address: "",
  };
  const [orderInfo, setOrderInfo] = React.useState(initialBookingInfo);

  const handleOnBlur = (e) => {
    const filed = e.target.name;
    const value = e.target.value;

    const newInfo = { ...orderInfo };
    newInfo[filed] = value;
    console.log(newInfo);
    setOrderInfo(newInfo);
  };
  const handleBookingOrder = (e) => {
    //collectdata usen end
    const order = {
      ...orderInfo,
      carName: name,
      price: price,
      model: modelYear,
      img: img,
    };
    //send server
    fetch("https://secure-refuge-54069.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setOrderSuccess(true);
          handleModalClose();
        }
        console.log(data);
      });
    // console.log(order);

    e.preventDefault();
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openModal}
      onClose={handleModalClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModal}>
        <Box sx={style}>
          <Typography
            sx={{ mb: 2 }}
            id="transition-modal-title"
            variant="h6"
            component="h2"
          >
            {name}
          </Typography>
          <form onSubmit={handleBookingOrder}>
            {" "}
            <TextField
              sx={{ mb: 2, width: "90%" }}
              disabled
              label="Car Name"
              name="carName"
              id="outlined-size-small"
              defaultValue={name}
              size="small"
            />
            <TextField
              sx={{ mb: 2, width: "90%" }}
              label="Consumer Name"
              onBlur={handleOnBlur}
              name="consumerName"
              id="outlined-size-small"
              defaultValue={user.displayName}
              size="small"
            />
            <TextField
              sx={{ mb: 2, width: "90%" }}
              label="Email"
              name="email"
              id="outlined-size-small"
              defaultValue={user.email}
              size="small"
            />
            <TextField
              sx={{ mb: 2, width: "90%" }}
              label="Phone"
              onBlur={handleOnBlur}
              name="phone"
              id="outlined-size-small"
              defaultValue="01"
              size="small"
            />
            <TextField
              sx={{ mb: 2, width: "90%" }}
              label="Address"
              name="address"
              onBlur={handleOnBlur}
              id="outlined-size-small"
              defaultValue="123,road,country"
              size="small"
            />
            <Button type="submit" variant="contained">
              Order
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default PurchaseModal;

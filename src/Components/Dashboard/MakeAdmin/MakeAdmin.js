import { Alert, TextField } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [adminSuccess, setAdminSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://secure-refuge-54069.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setEmail("");
          setAdminSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Make An Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "50%", mb: 4 }}
          id="standard-basic"
          label="Email"
          onBlur={handleOnBlur}
          type="email"
          variant="standard"
        />
        <br />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {adminSuccess && (
        <Alert severity="success">Made Admin Successfully !</Alert>
      )}
    </div>
  );
};

export default MakeAdmin;

import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

const Review = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.alert("Review added");
        reset();
      });
  };
  return (
    <div>
      <h1 className="text-center mb-5">Add Review</h1>

      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="p-2 m-2"
          {...register("name", { required: true })}
          placeholder="User Name"
        />

        <input
          className="p-2 m-2"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        <input
          className="p-2 m-2"
          {...register("review", { required: true })}
          placeholder="Review"
        />

        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input className="btn btn-danger" type="submit" />
      </form>
      <NavLink style={{ textDecoration: "none" }} to="/dashboard">
        <Button variant="contained" color="inherit">
          Dashboard
        </Button>
      </NavLink>
    </div>
  );
};

export default Review;

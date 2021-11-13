import React from "react";
import { useForm } from "react-hook-form";
const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addCar", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.alert("product added");
        reset();
      });
  };
  return (
    <div>
      <h1 className="text-center mb-5">Add Car</h1>

      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="p-2 m-2"
          {...register("img", { required: true })}
          placeholder="Image"
        />
        <input
          className="p-2 m-2"
          {...register("name", { required: true })}
          placeholder="Car Name"
        />

        <input
          className="p-2 m-2"
          type="number"
          {...register("price", { required: true })}
          placeholder="Price"
        />
        <input
          className="p-2 m-2"
          {...register("model", { required: true })}
          placeholder="Model"
        />

        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input className="btn btn-danger" type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;

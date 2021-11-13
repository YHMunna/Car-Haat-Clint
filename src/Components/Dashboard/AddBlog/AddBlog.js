import React from "react";
import { useForm } from "react-hook-form";
const AddBlog = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addBlog", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.alert("Blog added");
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
          {...register("details", { required: true })}
          placeholder="Details"
        />

        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input className="btn btn-danger" type="submit" />
      </form>
    </div>
  );
};

export default AddBlog;

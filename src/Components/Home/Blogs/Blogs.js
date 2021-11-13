import React, { useEffect, useState } from "react";

import { Container, Grid } from "@mui/material";

import SingleBlog from "../SingleBlog/SingleBlog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
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
        Blogs
      </h3>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {blogs.map((blog) => (
          <SingleBlog key={blog._id} blog={blog}></SingleBlog>
        ))}
      </Grid>
    </Container>
  );
};

export default Blogs;

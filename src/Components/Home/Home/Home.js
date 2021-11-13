import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Blogs from "../Blogs/Blogs";

import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import TopBanner from "../TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <TopBanner></TopBanner>
      <Services></Services>
      <Reviews></Reviews>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
};

export default Home;

import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";

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
      <Footer></Footer>
    </div>
  );
};

export default Home;

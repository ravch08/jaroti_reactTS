import React from 'react';
import { Banner, Categories, Clients, CompanyFeatures, FeaturedProducts, FooterBanner, Products, StoreBanner } from "../utils/helper";

const Home = () => {

  return (
    <React.Fragment>
      <Banner />
      <CompanyFeatures />
      <Categories />
      <StoreBanner />
      <Products />
      <FooterBanner />
      <FeaturedProducts />
      <Clients />
    </React.Fragment>
  )
}

export default Home;
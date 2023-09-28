import React from "react";
import { Banner, Categories, Clients, CompanyFeatures, FeaturedProducts, FooterBanner, Newsletter, Products, StoreBanner } from "../utils/helper";

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
			<Newsletter />
		</React.Fragment>
	);
};

export default Home;

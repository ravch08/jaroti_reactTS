import { PageBanner, Products, bannerProducts } from "../utils/helper";

const ProductsPage = () => {
	return (
		<>
			<PageBanner
				title="Products"
				imgSrc={bannerProducts}
				description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi esse aut officia blanditiis itaque fuga cupiditate."
			/>
			<Products />
		</>
	);
};

export default ProductsPage;

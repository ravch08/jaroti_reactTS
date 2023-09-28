import Categories from "../sections/Categories";
import { PageBanner, bannerProducts } from "../utils/helper";

const CategoriesPage = () => {
	return (
		<main>
			<PageBanner
				title="Products"
				imgSrc={bannerProducts}
				description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi esse aut officia blanditiis itaque fuga cupiditate."
			/>
			<Categories />
		</main>
	);
};

export default CategoriesPage;

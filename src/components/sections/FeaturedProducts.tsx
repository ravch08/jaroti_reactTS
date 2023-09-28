import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishlist, deleteFromWishlist } from "../../app/reducers/wishCartSlice";
import { ProductItem } from "../utils/helper";

const FeaturedProducts = () => {
	const dispatch = useDispatch();
	const { items } = useSelector((state) => state.wishCartState);

	return (
		<section className="featured-products" aria-labelledby="Featured Products">
			<div className="container">
				<div className="section-heading">
					<h2>Featured Products</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dolorum ipsum
						incidunt ipsam enim.
					</p>
				</div>

				<Stack
					flexWrap={"wrap"}
					alignItems={"center"}
					justifyContent={"center"}
					className="products-wrapper"
					gap={{ xs: "4rem", ms: "2rem" }}
					direction={{ xs: "column", md: "row" }}
				>
					{items
						?.filter((item) => item.featured === true)
						?.map((item) => {
							return (
								<ProductItem
									key={item.id}
									badge={item.badge}
									title={item.title}
									price={item.price}
									imgSrc={item.imgSrc}
									discount={item.discount}
									priceCrossed={item.priceCrossed}
									addToCart={() => dispatch(addToCart(item))}
									addToWishlist={() => dispatch(addToWishlist(item))}
									deleteFromWishlist={() => dispatch(deleteFromWishlist(item))}
								/>
							);
						})}
				</Stack>
			</div>
		</section>
	);
};

export default FeaturedProducts;

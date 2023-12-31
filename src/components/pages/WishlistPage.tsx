import React from "react";

import { Stack } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { deleteFromWishlist } from "../../features/wishlist/wishSlice";

import { ProductProps } from "../../types/types";
import { PageBanner, ProductItem, bannerProducts } from "../utils/helper";

const WishlistPage = () => {
	const dispatch = useDispatch();
	const { wishlist } = useSelector((state) => state.wishlist);

	return (
		<React.Fragment>
			<PageBanner
				title="Wishlist"
				imgSrc={bannerProducts}
				description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi esse aut officia blanditiis itaque fuga cupiditate."
			/>
			<section className="wishlist-page">
				<div className="container">
					<div className="section-heading">
						<h2>My Wishlist</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut commodi blanditiis dicta?
							Beatae quae perspiciatis vero illo inventore nam iste.
						</p>
					</div>

					<Stack
						gap={"2rem"}
						flexWrap={"wrap"}
						direction={"row"}
						alignItems={"center"}
						justifyContent={"center"}
					>
						{wishlist?.map((item: ProductProps) => {
							return (
								<ProductItem
									key={item.id}
									badge={item.badge}
									title={item.title}
									price={item.price}
									imgSrc={item.imgSrc}
									discount={item.discount}
									addToWishlist={() => false}
									priceCrossed={item.priceCrossed}
									addToCart={() => dispatch(addToCart(item))}
									deleteFromWishlist={() => dispatch(deleteFromWishlist(item))}
								/>
							);
						})}
					</Stack>
				</div>
			</section>
		</React.Fragment>
	);
};

export default WishlistPage;

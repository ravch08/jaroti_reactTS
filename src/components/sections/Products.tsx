import { useState } from "react";
import { Link } from "react-router-dom";

import { Stack } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { productItems } from "../utils/data";
import { ProductItem } from "../utils/helper";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishlist, deleteFromWishlist } from "../../app/reducers/wishCartSlice";
import { ProductProps } from "../../types/types";

const Products = () => {
	const dispatch = useDispatch();

	const [active, setActive] = useState(false);
	const [category, setCategory] = useState("Necklace");

	const { items } = useSelector((state) => state.wishCartState);

	const categoryAll = productItems?.map((item) => item.category);
	const filteredCategories = ["All", ...new Set(categoryAll)];

	// console.log(filteredCategories);

	const clickHandler = (e) => {
		const item = e.target.dataset.value;
		setActive(!active);
		setCategory(item);
	};

	const filteredProductItems = items?.filter((item) => category === item.category);

	return (
		<section className="products" aria-labelledby="Products">
			<div className="container">
				<div className="section-heading">
					<h2>Products</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dolores dolorem ullam
						provident aliquam ratione exercitationem?
					</p>
				</div>

				<Stack
					mb={"4rem"}
					gap={"2rem"}
					direction={"row"}
					alignItems={"center"}
					justifyContent={"center"}
					className="category-tabs"
				>
					{filteredCategories?.map((item) => {
						return (
							<Link
								to="#!"
								key={uuidv4()}
								data-value={item}
								onClick={clickHandler}
								className={category === item ? "active category-tab" : "category-tab"}
							>
								{item}
							</Link>
						);
					})}
				</Stack>

				<Stack
					flexWrap={"wrap"}
					alignItems={"center"}
					justifyContent={"center"}
					gap={{ xs: "4rem", md: "2rem" }}
					direction={{ xs: "column", md: "row" }}
				>
					{(category === "All" ? items : filteredProductItems)?.map((item: ProductProps) => {
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

export default Products;

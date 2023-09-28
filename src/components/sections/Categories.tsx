import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { categoryItems } from "../utils/data";

const Categories = () => {
	return (
		<section className="categories" aria-labelledby="Product Categories">
			<div className="container">
				<div className="section-heading">
					<h2>Categories</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, commodi?</p>
				</div>

				<Stack
					flexWrap={"wrap"}
					alignItems={"center"}
					gap={{ xs: "4rem", md: "2rem" }}
					justifyContent={"space-between"}
					direction={{ xs: "column", sm: "row" }}
				>
					{categoryItems?.map((item) => {
						return (
							<Link key={item.id} to={`/categories/${item.id}`} className="category-item">
								<figure>
									<img src={item.imgSrc} loading="lazy" alt={item.title} />
								</figure>
								<Typography variant="h5" component={"h3"} sx={{ color: "black", textTransform: "uppercase" }}>
									{item.title}
								</Typography>
							</Link>
						);
					})}
				</Stack>
			</div>
		</section>
	);
};

export default Categories;

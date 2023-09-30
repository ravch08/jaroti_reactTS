import { Skeleton, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { getCategory } from "../../services/apiCategory";

const Categories = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["categoryItems"],
		queryFn: getCategory,
	});

	const categoryItemsList = data?.map((item) => {
		return (
			<Link key={item.id} to={`/categories/${item.id}`} className="category-item">
				<figure>
					<img src={item.imgSrc} loading="lazy" alt={item.title} />
				</figure>
				<Typography
					variant="h5"
					component={"h3"}
					sx={{ color: "black", textTransform: "uppercase" }}
				>
					{item.title}
				</Typography>
			</Link>
		);
	});

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
					justifyContent={"space-evenly"}
					gap={{ xs: "4rem", md: "2rem" }}
					direction={{ xs: "column", sm: "row" }}
				>
					{isLoading ? (
						<Skeleton variant={"rounded"} animation="wave" height={250} />
					) : (
						categoryItemsList
					)}
				</Stack>
			</div>
		</section>
	);
};

export default Categories;

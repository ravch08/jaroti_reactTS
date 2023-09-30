import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { product23, product24, product25, storeBanner } from "../utils/helper";

const StoreBanner = () => {
	return (
		<section className="store-banner" aria-labelledby="Store Banner">
			<Stack alignItems={"flex-end"} justifyContent={"space-between"} gap={{ xs: "4rem", lg: "2rem" }} direction={{ xs: "column", lg: "row" }}>
				<figure className="main-banner">
					<img src={storeBanner} loading="lazy" alt="main banner" />
				</figure>
				<div className="storeBanner-content">
					<h2>
						Necklaces and <br /> Pendants for Women
					</h2>
					<p>Now Only $7 – Limited Time Only</p>
					<Link to="#!" className="btn btn-dark">
						SHOP NOW
					</Link>
					<Stack gap={"2rem"} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
						<figure>
							<img src={product23} loading="lazy" alt="banner-small" />
						</figure>
						<figure>
							<img src={product24} loading="lazy" alt="banner-small" />
						</figure>
						<figure>
							<img src={product25} loading="lazy" alt="banner-small" />
						</figure>
					</Stack>
				</div>
			</Stack>
		</section>
	);
};

export default StoreBanner;

import { Stack } from "@mui/material";
import { companyFeatureItems } from "../utils/data";

const CompanyFeatures = () => {
	return (
		<section className="company-features" aria-labelledby="Our Company features">
			<div className="container">
				<Stack
					flexWrap={"wrap"}
					alignItems={{ lg: "center" }}
					justifyContent={"space-between"}
					gap={{ xs: "4rem", md: "2rem" }}
					direction={{ xs: "column", sm: "row" }}
				>
					{companyFeatureItems?.map((item) => {
						return (
							<Stack gap={"1rem"} key={item.id} alignItems={"center"} className="feature-item" direction={{ xs: "column", md: "row" }}>
								<figure>{item.svg}</figure>
								<span className="feature-title">{item.title}</span>
							</Stack>
						);
					})}
				</Stack>
			</div>
		</section>
	);
};

export default CompanyFeatures;

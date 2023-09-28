import { Stack } from "@mui/material";
import { CompanyFeatureProps } from "../../types/types";
import { companyFeatureItems } from "../utils/data";

const CompanyFeatures = () => {
	return (
		<section className="company-features" aria-labelledby="Our Company features">
			<div className="container">
				<Stack
					flexWrap={"wrap"}
					alignItems={{ lg: "center" }}
					gap={{ xs: "4rem", md: "2rem" }}
					justifyContent={"space-between"}
					direction={{ xs: "column", sm: "row" }}
				>
					{companyFeatureItems?.map((item: CompanyFeatureProps) => {
						return (
							<Stack
								gap={"1rem"}
								key={item.id}
								alignItems={"center"}
								className="feature-item"
								direction={{ xs: "column", md: "row" }}
							>
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

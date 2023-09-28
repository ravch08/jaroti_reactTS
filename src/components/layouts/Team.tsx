import { Stack, Typography } from "@mui/material";
import { teamItems } from "../utils/data";

const Team = () => {
	return (
		<section className="teams" aria-labelledby="Our Team">
			<div className="container">
				<div className="section-heading">
					<h2>Our Team</h2>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum veritatis voluptatem soluta.</p>
				</div>

				<Stack gap={"3rem"} alignItems={"center"} justifyContent={"space-between"} direction={{ sm: "column", md: "row" }}>
					{teamItems?.map((item) => {
						return (
							<div className="team-item" key={item.id}>
								<figure>
									<img src={item.imgSrc} loading="lazy" alt={item.title} />
								</figure>
								<div className="team-content">
									<Typography variant="h4" component={"h3"}>
										{item.title}
									</Typography>
									<span>{item.designation}</span>
								</div>
							</div>
						);
					})}
				</Stack>
			</div>
		</section>
	);
};

export default Team;

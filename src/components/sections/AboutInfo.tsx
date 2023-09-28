import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { aboutInfo } from "../utils/helper";

const AboutInfo = () => {
	return (
		<section className="about-info">
			<div className="container">
				<Stack
					gap={"3rem"}
					alignItems={"center"}
					justifyContent={"space-between"}
					direction={{ sm: "column", md: "row" }}
				>
					<figure>
						<img src={aboutInfo} loading="lazy" alt="about us" />
					</figure>
					<div className="about-content">
						<h2>ABOUT OUR STORE</h2>
						<p>
							Since 1990 dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel
							interdum augue faucibus sit amet. Proin tempor purus ac suscipit sagittis. Nunc
							finibus euismod enim, eu finibus nuncullamcorper et. Fusce finibus non odio vel
							viverra. Aliquam condimentum dictum gravida.
							<br />
							<br />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dignissimos minus vel.
							Praesentium eligendi quod ipsa. Iusto dicta esse deserunt.
						</p>
						<Link to="#!" className="btn btn-dark">
							KNOW MORE
						</Link>
					</div>
				</Stack>
			</div>
		</section>
	);
};

export default AboutInfo;

import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const FooterBanner = () => {
	return (
		<section className="footer-banner" aria-labelledby="Footer Banner">
			<div className="container">
				<Stack direction={"row"} alignItems={"center"} className="banner-item" justifyContent={"center"}>
					<div className="banner-content">
						<span>Sale Off 50% – Limited Time Only</span>
						<h2>
							Necklaces and Pendants <br /> for Women
						</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem ipsum porro dicta harum deserunt delectus?</p>
						<Link to="#!" className="btn btn-light">
							SHOP NOW
						</Link>
					</div>
				</Stack>
			</div>
		</section>
	);
};

export default FooterBanner;

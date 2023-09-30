import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { ScrollTop, SocialIcons, logoLight, payments } from "../utils/helper";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<Stack
					gap={"4rem"}
					flexWrap={"wrap"}
					padding={"8rem 0 6rem"}
					alignItems={"flex-start"}
					justifyContent={"space-between"}
					direction={{ xs: "column", md: "row" }}
				>
					<div className="ftr-logo">
						<Link to={"/"}>
							<img src={logoLight} loading="lazy" width={"100"} />
						</Link>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque blanditiis autem
							eveniet vel fugit nostrum tempora doloribus corrupti accusantium quas.
						</p>

						<SocialIcons />
					</div>

					<Stack className="ftr-list" direction={"column"} alignItems={"flex-start"}>
						<span className="ftr-head">SERVICES</span>
						<Link to="#!" className="ftr-links">
							Treats Club
						</Link>
						<Link to="#!" className="ftr-links">
							Piercing Parlour
						</Link>
						<Link to="#!" className="ftr-links">
							Student Discount
						</Link>
						<Link to="#!" className="ftr-links">
							Site Map
						</Link>
					</Stack>

					<Stack className="ftr-list" direction={"column"} alignItems={"flex-start"}>
						<span className="ftr-head">ABOUT JAROTI</span>
						<Link to="#!" className="ftr-links">
							Our Brand
						</Link>
						<Link to="#!" className="ftr-links">
							Charity
						</Link>
						<Link to="#!" className="ftr-links">
							CSR
						</Link>
						<Link to="#!" className="ftr-links">
							Career
						</Link>
					</Stack>

					<Stack className="ftr-list" direction={"column"} alignItems={"flex-start"}>
						<span className="ftr-head">DELIVERY & RETURN</span>
						<Link to="#!" className="ftr-links">
							Check Order
						</Link>
						<Link to="#!" className="ftr-links">
							Delivery & Collection
						</Link>
						<Link to="#!" className="ftr-links">
							Careers
						</Link>
						<Link to="#!" className="ftr-links">
							Delivery Return
						</Link>
					</Stack>

					<Stack className="ftr-list" direction={"column"} alignItems={"flex-start"}>
						<span className="ftr-head">CUSTOMER SERVICES</span>
						<Link to="#!" className="ftr-links">
							Terms & Policies
						</Link>
						<Link to="#!" className="ftr-links">
							Contact Us
						</Link>
						<Link to="#!" className="ftr-links">
							Opening Hours
						</Link>
						<Link to="#!" className="ftr-links">
							Size Guides
						</Link>
					</Stack>
				</Stack>

				<Stack
					gap={"2rem"}
					padding={"3rem 0"}
					alignItems={"center"}
					className="footer-bar"
					justifyContent={"space-between"}
					direction={{ xs: "column", md: "row" }}
				>
					<p>© Jaroti 2023. All Rights Reserved.</p>
					<img src={payments} alt="payments" />
				</Stack>
			</div>
			<ScrollTop />
		</footer>
	);
};

export default Footer;

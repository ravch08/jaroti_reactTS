import React from "react";
import Quote from "../sections/Quote";
import { AboutInfo, Clients, Newsletter, Team } from "../utils/helper";

const AboutUs = () => {
	return (
		<React.Fragment>
			<section className="about-banner">
				<p>
					Jaroti was established in 1990. We are artisans who design, make and sell jewelry and
					gifts for love.
				</p>
			</section>

			<AboutInfo />
			<Quote />
			<Team />
			<Newsletter />
			<Clients />
		</React.Fragment>
	);
};

export default AboutUs;

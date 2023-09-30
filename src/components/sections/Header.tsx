import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import {
	CartButton,
	LoginButton,
	Navbar,
	SearchButton,
	WishlistButton,
	logoDark,
} from "../utils/helper";

const Header = () => {
	const [isSticky, setIsSticky] = useState("");

	const stickyHandler = () => {
		const stickyClass = window.scrollY > 150 ? "sticky" : "";
		setIsSticky(stickyClass);
	};

	useEffect(() => {
		window.addEventListener("scroll", stickyHandler);
		return () => window.removeEventListener("scroll", stickyHandler);
	}, []);

	const sticker = `${isSticky} navbar`;

	return (
		<header>
			<div className="topbar">
				<p>ENJOY 15% OFF WITH TWO OR MORE ITEMS & FREE SHIPPING ON ALL ORDERS.</p>
			</div>

			<div className={sticker}>
				<div className="container">
					<div className="header-wrapper">
						<Link to="/" className="nav-brand">
							<img src={logoDark} width={120} alt="Jaroti" />
						</Link>

						<Navbar />

						<div className="user-login">
							<SearchButton />
							<LoginButton />
							<WishlistButton />
							<CartButton />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;

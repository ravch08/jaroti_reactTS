import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav aria-labelledby="Primary Navigation">
			<ul className="navbar-list">
				<li className="nav-item">
					<NavLink to="/" className="nav-link">
						Home
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="aboutus" className="nav-link">
						About Us
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="products" className="nav-link">
						Products
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="categories" className="nav-link">
						Categories
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="contact" className="nav-link">
						Contact Us
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

import { useEffect, useState } from "react";

const ScrollTop = () => {
	const [isScroll, setIsScroll] = useState("");

	const scrollTopHandler = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const scrollHandler = () => {
		const scrollClass = window.scrollY > 150 ? "show" : "";
		setIsScroll(scrollClass);
	};

	useEffect(() => {
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, []);

	const scrollToTop = `${isScroll} scrollToTop`;

	return (
		<div className={scrollToTop} onClick={scrollTopHandler}>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<title>up arrow</title>
				<g className="nc-icon-wrapper">
					<path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
				</g>
			</svg>
		</div>
	);
};

export default ScrollTop;

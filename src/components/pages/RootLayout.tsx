import { Outlet } from "react-router-dom";
import { Footer, Header } from "../utils/helper";

const RootLayout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default RootLayout;

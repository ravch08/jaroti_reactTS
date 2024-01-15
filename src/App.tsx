import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
// prettier-ignore
import { AboutUs, CartPage, CategoriesPage, CategoryPage, Contact, Home, LoginPage, Page404, ProductsPage, RootLayout, WishlistPage } from "./components/utils/helper";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "./features/cart/cartSlice";
import { InitialStateProps } from "./types/types";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="aboutus" element={<AboutUs />} />
			<Route path="products" element={<ProductsPage />} />
			<Route path="categories" element={<CategoriesPage />} />
			<Route path="categories/:categoryID" element={<CategoryPage />} />
			<Route path="contact" element={<Contact />} />
			<Route path="cart" element={<CartPage />} />
			<Route path="wishlist" element={<WishlistPage />} />
			<Route path="login" element={<LoginPage />} />
			<Route path="*" element={<Page404 />} />
		</Route>
	)
);

function App() {
	const dispatch = useDispatch();
	const { cart } = useSelector((state: InitialStateProps) => state.cart);

	useEffect(() => {
		dispatch(getCartTotal());
	}, [cart, dispatch]);

	return <RouterProvider router={router} />;
}

export default App;

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { AboutUs, Cart, Contact, Home, Wishlist, Page404, RootLayout } from "./components/utils/helper";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path="aboutus" element={<AboutUs />} />
    <Route path="contact" element={<Contact />} />
    <Route path="cart" element={<Cart />} />
    <Route path="wishlist" element={<Wishlist />} />
    <Route path="*" element={<Page404 />} />
  </Route>
))

function App() {
  return <RouterProvider router={router} />
}

export default App;
import { Outlet } from "react-router-dom"
import { Header, Footer } from "../utils/helper";

const RootLayout = () => {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout;
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Container maxWidth='md'>
        <Footer />
      </Container>
    </>
  );
}

export default Layout;

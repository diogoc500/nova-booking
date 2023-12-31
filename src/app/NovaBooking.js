import { Box } from "@mui/material";
import Navbar from "./NavBar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";

// css
import "./NovaBooking.css";
import ProfilePage from "./Pages/Profile/ProfilePage";
import Footer from "./Footer/Footer";
import AboutPage from "./Pages/About/AboutPage";
import { useSelector } from "react-redux";
import Library from "./Pages/BuildingPages/Library/Library";
import MyReservations from "./Pages/MyReservations/MyReservations";
import Ed2 from "./Pages/BuildingPages/ed2/Ed2";

const NovaBooking = () => {
  const paths = useSelector((store) => store.paths);

  return (
    <Box className="novabooking">
      <Navbar />
      <div className="site-body">
        <Routes>
          <Route path={paths.homePage} element={<HomePage />} />
          <Route path={paths.homePageAlt} element={<HomePage />} />
          <Route path={paths.profilePage} element={<ProfilePage />} />
          <Route path={paths.aboutPage} element={<AboutPage />} />
          <Route path={paths.libraryPage} element={<Library />} />
          <Route path={paths.myReservationsPage} element={<MyReservations />} />
          <Route path={paths.ed2} element={<Ed2 />} />
        </Routes>
      </div>
      <Footer />
    </Box>
  );
};

export default NovaBooking;

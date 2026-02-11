import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.jsx";
import Home from "./Pages/HomePage/HomePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./Routes/AppLayout.jsx";
import LoginPage from "./Pages/LoginPages/LoginPage.jsx";
import ForgetPassWord from "./Pages/LoginPages/ForgetPassWord.jsx";
import RegisterPage from "./Pages/LoginPages/RegisterPage.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import CanvasPrints from "./Pages/PrintPages/Canvas-Prints/CanvasPrints.jsx";
import Travel from "./Pages/PrintPages/Travel/Travel.jsx";
import NeonSigns from "./Pages/HomeDecor/NeonSigns/NeonSigns.jsx";
import NeckPillow from "./Pages/HomeDecor/NeckPillow/NeckPillow.jsx";
import PhotoPuzzles from "./Pages/PersonolizedGifts/PhotoPuzzles/PhotoPuzzles.jsx";
import PhotoPillows from "./Pages/PersonolizedGifts/PhotoPillows/PhotoPillows.jsx";
import Travel2 from "./Pages/Occassions/Travel/Travel.jsx";
import Travel3 from "./Pages/Occassions/Travel copy 2/Travel.jsx";
import Travel4 from "./Pages/Cities/Travel copy 2/Travel.jsx";
import Travel5 from "./Pages/Cities/Travel copy 3/Travel.jsx";
import BestOffers from "./Pages/Best Offers/BestOffers.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/forgot-password", element: <ForgetPassWord /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/cart", element: <Cart /> },
      { path: "/canvas-prints", element: <CanvasPrints></CanvasPrints> },
      { path: "travel", element: <Travel></Travel> },
      { path: "custom-neon-signs", element: <NeonSigns></NeonSigns> },
      { path: "custom-neck-pillow", element: <NeckPillow></NeckPillow> },
      { path: "photo-puzzles", element: <PhotoPuzzles></PhotoPuzzles> },
      { path: "photo-pillows", element: <PhotoPillows></PhotoPillows> },
      { path: "mothers-day-gifts", element: <Travel2 /> },
      { path: "brothers-day-gifts", element: <Travel3 /> },
      { path: "city/delhi", element: <Travel4 /> },
      { path: "city/noida", element: <Travel5 /> },
      { path: "best-offers", element: <BestOffers /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </StrictMode>,
);

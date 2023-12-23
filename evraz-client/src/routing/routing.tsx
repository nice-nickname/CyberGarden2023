import { createBrowserRouter } from "react-router-dom";
import { MapPage } from "../pages/map-page/map-page";
import { StationPage } from "../pages/station-page/station-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MapPage />,
  },
  {
    path: "/:id",
    element: <StationPage />,
  },
]);

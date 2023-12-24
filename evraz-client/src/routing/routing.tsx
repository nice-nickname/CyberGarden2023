import { createBrowserRouter } from "react-router-dom";
import { MapPage } from "../pages/map-page/map-page";
import { StationPage } from "../pages/station-page/station-page";
import { AuthPage } from "../pages/auth/auth-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />
  },
  {
    path: "/map",
    element: <MapPage />,
  },
  {
    path: "/station/:id",
    element: <StationPage />,
  },
]);

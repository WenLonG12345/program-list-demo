import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import ChannelDetailsPage from "../pages/details";
import FavouritePage from "../pages/favourite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/channel",
    children: [
      {
        path: ":channelId",
        element: <ChannelDetailsPage />,
      },
      {
        path: "create",
        element: <div>Create Channel</div>,
      },
    ],
  },
  {
    path: "/favourite",
    element: <FavouritePage />,
  },
  {
    path: "*",
    element: <div className="container mx-auto">404 Not Found</div>,
  },
]);

export default router;

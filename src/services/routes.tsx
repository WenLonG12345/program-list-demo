import {
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "../pages/home";
import ChannelDetailsPage from "../pages/details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/channel/:channelId",
    element: <ChannelDetailsPage />
  }
])

export default router;
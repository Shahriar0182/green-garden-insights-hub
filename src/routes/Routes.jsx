
import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import NotFound from "@/pages/NotFound";
import BrowseTips from "@/pages/BrowseTips";
import ShareTip from "@/pages/ShareTip";
import MyTips from "@/pages/MyTips";
import TipDetails from "@/pages/TipDetails";
import UpdateTip from "@/pages/UpdateTip";
import ExploreGardeners from "@/pages/ExploreGardeners";
import MainLayout from "@/layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";
import Index from "@/pages/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Index />
      </MainLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <MainLayout>
        <Login />
      </MainLayout>
    ),
  },
  {
    path: "/register",
    element: (
      <MainLayout>
        <Register />
      </MainLayout>
    ),
  },
  {
    path: "/browse-tips",
    element: (
      <MainLayout>
        <BrowseTips />
      </MainLayout>
    ),
  },
  {
    path: "/share-tip",
    element: (
      <MainLayout>
        <PrivateRoute>
          <ShareTip />
        </PrivateRoute>
      </MainLayout>
    ),
  },
  {
    path: "/my-tips",
    element: (
      <MainLayout>
        <PrivateRoute>
          <MyTips />
        </PrivateRoute>
      </MainLayout>
    ),
  },
  {
    path: "/tip-details/:id",
    element: (
      <MainLayout>
        <PrivateRoute>
          <TipDetails />
        </PrivateRoute>
      </MainLayout>
    ),
  },
  {
    path: "/update-tip/:id",
    element: (
      <MainLayout>
        <PrivateRoute>
          <UpdateTip />
        </PrivateRoute>
      </MainLayout>
    ),
  },
  {
    path: "/explore-gardeners",
    element: (
      <MainLayout>
        <ExploreGardeners />
      </MainLayout>
    ),
  },
  {
    path: "*",
    element: (
      <MainLayout>
        <NotFound />
      </MainLayout>
    ),
  },
]);

export default router;

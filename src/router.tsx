import { createBrowserRouter } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import HomePage from "./pages/home";
import ProfilePage from "./pages/profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout>
        <HomePage />
      </PageLayout>
    ),
  },
  {
    path: "profile",
    element: (
      <PageLayout>
        <ProfilePage />
      </PageLayout>
    ),
  },
]);

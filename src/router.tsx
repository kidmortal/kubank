import { createBrowserRouter } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import { HomePage } from "./pages/home";
import { ProfilePage } from "./pages/profile";
import { AddPage } from "./pages/add";
import { BookmarkPage } from "./pages/bookmark";
import { NotificationPage } from "./pages/notification";

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
  {
    path: "add",
    element: (
      <PageLayout>
        <AddPage />
      </PageLayout>
    ),
  },
  {
    path: "bookmark",
    element: (
      <PageLayout>
        <BookmarkPage />
      </PageLayout>
    ),
  },
  {
    path: "notification",
    element: (
      <PageLayout>
        <NotificationPage />
      </PageLayout>
    ),
  },
]);

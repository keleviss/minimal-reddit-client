import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import PostPage from "../pages/PostPage";
import Root from "../pages/Root";

const router = createBrowserRouter([
  { path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ":sort", element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      { path: "post", element: <PostPage /> },
    ] 
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

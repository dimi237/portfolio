import { lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const Yo = lazy(() => import("./pages/yo"));
const Typography = lazy(() => import("./pages/design/typography"));


export default function Router() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:  <Home /> ,
    },
      {
      path: '/example',
      element:  <Yo /> ,
    },
    {
      path: 'design/typography',
      element: <Typography />,
    },

  ]);
  return (
    <RouterProvider router={router} />
  );
}
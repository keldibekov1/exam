import { useRoutes } from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import Saved from "./saved";
import BlogCreate from "./blog-create";
import Detail from "./detail";

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "blog-create",
          element: <BlogCreate />,
        },
        {
          path: "saved",
          element: <Saved />,
        },
        {
          path: "detail/:id", 
          element: <Detail />,
        },
      ],
    },
  ]);
};

export default AppRoutes;

import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/components";
import { AllNews, Home, PhotoGallery } from "@/pages";
import Aos from "aos";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/news",
          element: <AllNews />,
        },
        {
          path: "/photos",
          element: <PhotoGallery />,
        },
      ],
    },
  ]);

  useEffect(() => {
    Aos.init({
      once: false,
      duration: 1000,
      delay: 200,
    });
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

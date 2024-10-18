import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/components";
import { Home } from "@/pages";
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

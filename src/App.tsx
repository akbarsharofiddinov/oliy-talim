import React, { Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/components";
import { AllNews, Home, PhotoGallery } from "@/pages";
import Aos from "aos";
import { useAppDispatch, useAppSelector } from "./store/Hooks/hooks";
import { setLanugage } from "@/store/Languages/languageSlice";

// i18next
import "./i18";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const language = useAppSelector((state) => state.languages.language);

  const router = createBrowserRouter([
    {
      path: `/${language}`, // Dynamic language parameter in the root path
      element: <Layout />,
      children: [
        {
          path: "", // Home page (relative to the root path, e.g., `/en` or `/ru`)
          element: <Home />,
        },
        {
          path: "news", // News page (e.g., `/en/news` or `/ru/news`)
          element: <AllNews />,
        },
        {
          path: "photos", // Photos page (e.g., `/en/photos` or `/ru/photos`)
          element: <PhotoGallery />,
        },
      ],
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);

  useEffect(() => {
    Aos.init({
      once: false,
      duration: 1000,
      delay: 200,
    });
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("interface_language")) {
      localStorage.setItem("interface_language", JSON.stringify("uz"));
      dispatch(setLanugage("uz"));
    } else {
      dispatch(
        setLanugage(JSON.parse(localStorage.getItem("interface_language") + ""))
      );
    }
  }, []);

  return (
    <>
      <Suspense>{language ? <RouterProvider router={router} /> : ""}</Suspense>
    </>
  );
};

export default App;

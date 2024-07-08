import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/SignUp.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";
import UniversityDetail from "./components/universityDetail.jsx";
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFoundPage />
    },
    {
        path: '/signUp',
        element: <SignUp />,
    },
    {
        path: '/university/:id', // Dynamic route for university details
        element: <UniversityDetail />,
    },
    {
        path: '*', // Catch-all route for undefined paths
        element: <NotFoundPage />,
    },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

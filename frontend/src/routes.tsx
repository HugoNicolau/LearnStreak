import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
            { path: "forgot-password", element: <ForgotPassword /> },
            {
                path: "dashboard",
                element: <PrivateRoute><Dashboard /></PrivateRoute>
            },
        ],
    },
]);

export default router;
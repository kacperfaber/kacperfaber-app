import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Index} from "./routes/index";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index/>
    }
]);

export const AppRouter = () => {
    return (
        <RouterProvider router={router}/>
    );
}
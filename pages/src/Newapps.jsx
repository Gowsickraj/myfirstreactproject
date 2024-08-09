import { Home } from "./navbar/Home";
// import { Error } from "./navbar/Error";
import { About } from "./navbar/About";
import { Product } from "./navbar/Product";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Nav/Nav";
import { Error } from "./navbar/Error";
import { Signup } from "./Management/Signup";
import { Login } from "./Management/Login";


export const Newapps = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            errorElement:<Error/>,
            children: [{
                path: 'home',
                element: <Home />,

            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'product',
                element: <Product />
            },
            {
                path:'signup',
                element:<Signup/>
            },
            {
                path:'login',
                element:<Login/>
            }

            ]
        },
       
    ])
    return (
        
           <RouterProvider router={router} />
        
    )
}

import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import {
    Home, ProductPage, ProductDetail, Contact, About, Cart,
    Checkout, OrderDetail, OrderHistory
} from "../Features/Product/Pages";
import{Register , Login} from "../Features/Auth/Pages"
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '',
                children: [

                    { index: true, element: <Home /> },
                    { path: 'Home', element: <Home /> },
                ]
            },  {
                path: 'Products',
                element: <ProductPage />

            }, {
                path: 'Products/:category',
                element: <ProductPage />
            },
            {
                path: 'ProductDetail/:id',
                element: <ProductDetail />
            },
            {
                path: 'About',
                element: <About />

            },
            {
                path: 'Contact',
                element: <Contact />
            }
            , {
                path: 'Cart',
                element: <Cart />
            }

            , {
                path: 'Checkout',
                element: <Checkout />
            }
            , {
                path: 'Register',
                element: <Register />
            },
            {
                path: 'Login',
                element: <Login />
            },
            {
                path: 'OrderDetail',
                element: <OrderDetail />
            },
            {
                path: 'OrderHistory',
                element: <OrderHistory />
            }
        ]
    }
])
export default router
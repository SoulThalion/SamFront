import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from '../layout/Layout'
import Login from '../pages/Login'
import Home from "../pages/Home";

const isAuthenticated = () => !localStorage.getItem('token') ? redirect("/") : null
const isNotAuthenticated = () => localStorage.getItem('token') ? redirect("/") : null

const router = createBrowserRouter([

  {
    path: '/login',
    element: <Login />,
    loader: isNotAuthenticated
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
]}
])

export default router
import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from '../layout/Layout'
import Login from '../pages/Login'
import Home from "../pages/Home";
import Users from "../pages/Users";

const isAuthenticated = () => !localStorage.getItem('token') ? redirect("/login") : null
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
        loader: isAuthenticated,
      },
      {
        path: '/users',
        element: <Users/>,
        loader: isAuthenticated,
      },
]}
])

export default router
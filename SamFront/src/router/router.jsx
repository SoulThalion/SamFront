import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from '../layout/Layout'
import Login from '../pages/Login'

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
        element: <h1>HOLA</h1>,
      },
]}
])

export default router
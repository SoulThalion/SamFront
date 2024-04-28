import { createBrowserRouter } from "react-router-dom";
//import {Layout} from '../layout/Layout'
import {Login} from '../pages/Login'


const router = createBrowserRouter([

  {
    path: '/',
    element: <Login />,
    }
])

export default router
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext }  from "../context/userContext"
import login from '../services/auth.service'


const Login = () => {

    const navigate = useNavigate()

  const {user, setUser} = useContext(UserContext)

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  //const [isPassVisible, setIsPassVisible]  = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    const data = await login(userName, password)

    if(data) {
      localStorage.setItem('token', data.token)
      setUser(data.user)
      navigate("/")
    }
  }
  
    return (
    
<div className="flex flex-col justify-center items-center min-h-screen bg-black">
    <h1 className="text-white text-3xl text-center mb-4">SAM</h1>
    <h3 className="text-white text-lg text-center mb-8">Ship Assignment Management</h3>
    <form className="w-full max-w-md bg-242529 rounded-lg p-6 border border-58aaae" onSubmit={handleLogin}>
        <div className="mb-4">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Nombre de Usuario</label>
            <input type="text" onChange={(e) => setUserName(e.target.value)} id="username" style={{backgroundColor: '#21212d'}} className="border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nombre" required />
        </div>
        <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Contraseña</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" style={{backgroundColor: '#21212d'}} className="border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="contraseña" required />
        </div>
        <div className="flex justify-center">
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-20 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
        </div>
    </form>
</div>


  
  )
}

export default Login
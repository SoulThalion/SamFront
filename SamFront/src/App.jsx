import './App.css'
import router from './router/router'
import { EditUserContext, UserContext } from './context/userContext'
import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'


function App() {
  const [user, setUser] = useState(null)

  return (
    
    <>
    <UserContext.Provider value={{user, setUser}}>
    {/*<EditUserContext.Provider value={{editUser, setEditUser}}>*/}
      <RouterProvider router={router}/>
      <div><Toaster/></div>
      {/*</EditUserContext.Provider>*/}
    </UserContext.Provider>
    </>
  )
}

export default App

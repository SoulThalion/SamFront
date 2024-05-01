import './App.css'
import router from './router/router'
import { EditUserContext, UserContext } from './context/userContext'
import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'


function App() {
  const [user, setUser] = useState(null)

  return (
    
    <>
    <UserContext.Provider value={{user, setUser}}>
    {/*<EditUserContext.Provider value={{editUser, setEditUser}}>*/}
      <RouterProvider router={router}/>
      {/*</EditUserContext.Provider>*/}
    </UserContext.Provider>
    </>
  )
}

export default App

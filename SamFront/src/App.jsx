import './App.css'
import router from './router/router'
import { UserContext } from './context/userContext'
import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null)

  return (
    
    <>
    <UserContext.Provider value={{user, setUser}}>
      <RouterProvider router={router}/>
    </UserContext.Provider>
    </>
  )
}

export default App

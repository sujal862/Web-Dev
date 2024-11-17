import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <Login />  
      <Profile />
    </UserContextProvider>
  )
}

export default App

/* -> Login and Profile component are children of UserContextProvider and passed as a prop to children in usercontextprovider.jsx

->UserContextProvider ensures Login and Profile have access to the user state and its updater.
->Login updates the user state, and Profile uses these updated user data.
*/
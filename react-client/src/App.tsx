
import { UsersPage } from './components/pages/users'
import './App.css'
import { useState } from 'react'

function App() {
  const [showUsers, setShowUsers] = useState(true)

  return (
    <>
      {showUsers ? <UsersPage /> : "No Users"}
    </>
  )
}

export default App

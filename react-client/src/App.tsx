
import { UsersPage } from './components/pages/users'
import './App.css'
import { useState } from 'react'
import { Country } from './components/pages/countries/country'
import { CountriesPage } from './components/pages/countries'

function App() {
  const [showUsers, setShowUsers] = useState(true)
  const [showOrHide, setShowOrHide] = useState("Hide")
  { }
  return (
    <>
      <div>
        <button onClick={() => {
          const newText = showUsers ? "Show" : "Hide";
          setShowUsers(!showUsers)
          setShowOrHide(newText)
        }}>
          {showOrHide}
        </button>
      </div>
      {showUsers ? <UsersPage /> : "No Users"}
      <CountriesPage />
    </>
  )
}

export default App

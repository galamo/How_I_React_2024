import './App.css'

import { Suspense, lazy, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Spinner } from './components/ui/loader'
import FilterDefferedValue from './components/pages/deferredValue';


const LazyCountriesPage = lazy(() => import("./components/pages/countries"));
const LazyUsersPage = lazy(() => import("./components/pages/users"));
const LazyMainPage = lazy(() => import("./components/pages/main"));



function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>

          <Link style={{ marginLeft: "30px" }} to="/countries">Countries</Link>
          <Link style={{ marginLeft: "30px" }} to="/login">Users</Link>
          <Link style={{ marginLeft: "30px" }} to="/">Main</Link>
          <Link style={{ marginLeft: "30px" }} to="/defer">FilterDefferedValue</Link>


          <Routes>
            <Route Component={LazyMainPage} path={"/"} key="main" />

            <Route Component={FilterDefferedValue} path={"/defer"} key="defer" />
            <Route Component={LazyUsersPage} path={"/login"} key="login" />
            <Route Component={LazyMainPage} path={"/"} key="main" />

          </Routes>
          {/* <div>
          <button onClick={() => {
            const newText = showUsers ? "Show" : "Hide";
            setShowUsers(!showUsers)
            setShowOrHide(newText)
          }}>
            {showOrHide}
          </button>
        </div>
        {showUsers ? <UsersPage /> : "No Users"}
        <CountriesPage /> */}
        </BrowserRouter >
      </Suspense>
    </>
  )
}

export default App



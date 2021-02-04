import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import MainPage from './pages/MainPage'
import Header from './layouts/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={Header}/>
      <Route exact path='/' component={MainPage}/>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/signin' component={SignIn}/>
      <Route path='/mainPage' component={MainPage}/>
    </BrowserRouter>
  )
}

export default App

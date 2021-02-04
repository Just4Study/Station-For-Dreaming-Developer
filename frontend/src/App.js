import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home'
import SignUp from './pages/SignUp'


const App = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home}/>
      <Route exact path='/signup' component={SignUp}/>
    </BrowserRouter>
  )
}

export default App

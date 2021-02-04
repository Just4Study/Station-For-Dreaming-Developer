import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'


const App = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home}/>
    </BrowserRouter>
  )
}

export default App

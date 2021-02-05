import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import MainPage from './pages/MainPage'
import MentorPage from './pages/MentorPage'
import TeamPage from './pages/TeamPage'
import WritingPage from './pages/WritingPage'
import Header from './layouts/Header'

const App = () => {

  return (
    <BrowserRouter>
      <Route path='/' component={Header}/>
      <Route exact path='/' component={MainPage}/>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/login' component={LogIn}/>
      <Route exact path='/team/:pageId' component={TeamPage}/>
      <Route exact path='/writing' component={WritingPage}/>
      <Route path='/main' component={MainPage}/>
      <Route path='/mentor' component={MentorPage}/>
    </BrowserRouter>
  )
}

export default App

import React, { useState } from 'react'

import signinstyle from './signin.module.css'
import logo from '../../imgs/logo.png'


const App = () => {
  const styles = signinstyle
  const [infos, setInfos] = useState({
    email: '',
    password: '',
  })

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInfos(infos => ({...infos, [name]: value}));
  }

  return (
    <div className={styles.container}>
      <div className={styles.signInContainer}>
        <img
          src={logo}
          alt='logo'
          className={styles.logoContainer}
        />
        <input
          className={styles.inputBox}
          placeholder='EMAIL'
          name='email'
          value={infos['email']}
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          className={styles.inputBox}
          placeholder='PASSWORD'
          name='password'
          value={infos['password']}
          onChange={(e) => onChangeHandler(e)}
        />
        <div className={styles.signUpBtnContainer}>
          <button
            className={styles.signUpBtn}
          >
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

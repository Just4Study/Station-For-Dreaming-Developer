import React, { useState } from 'react'

import loginstyle from './login.module.css'
import logo from '../../imgs/logo.png'

const App = () => {
  const styles = loginstyle
  const [infos, setInfos] = useState({
    email: '',
    password: '',
  })

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInfos(infos => ({ ...infos, [name]: value }));
  }

  return (
    <div className={styles.container}>
      <div className={styles.logInContainer}>
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
        <div className={styles.logInBtnContainer}>
          <button
            className={styles.logInBtn}
          >
            LOG IN
          </button>
          <button
            className={styles.signUpButton}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

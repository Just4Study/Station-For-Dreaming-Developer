import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import loginstyle from './login.module.css'
import logo from '../../imgs/logo.png'
import axios from 'axios'

const App = () => {
  const styles = loginstyle
  const [infos, setInfos] = useState({
    email: '',
    password: '',
  })
  const [isLogin, setLogin] = useState(false);
  const history = useHistory();

  axios.post(
    'http://127.0.0.1:8000/user/login',
    {
    user_name: 'name',
    email: 'email@gmail.com',
    password: '123'
  }, {})
  .then(function (response) {
    console.log(response);
    // history.push('/');
  })
  .catch(function (error) {
    console.log(error);
  });
    

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

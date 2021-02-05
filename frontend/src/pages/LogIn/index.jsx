import useRootData from '../../stores/useRootData.js'

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import loginstyle from './login.module.css'
import logo from '../../imgs/logo.png'
import axios from 'axios'


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const App = () => {
  const styles = loginstyle
  const history = useHistory()
  const [isSubmit, setSubmit] = useState(false);
  const [infos, setInfos] = useState({
    email: '',
    password: '',
  })

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInfos(infos => ({ ...infos, [name]: value }));
  }

  async function buttonHandler() {
    console.log('버튼클릭');
    setSubmit(true);
    await sleep(1000);
    setSubmit(false);
  }


  const { isLoggined, name, email, changeIsLoggined, changeName, changeEmail } = useRootData(({ authStore }) => ({
    isLoggined: authStore.isLoggined.get(),
    name: authStore.name.get(),
    email: authStore.email.get(),
    changeIsLoggined: authStore.changeIsLoggined,
    changeName: authStore.changeName,
    changeEmail: authStore.changeEmail,
  }))


  useEffect(() => {
    console.log(isSubmit)
    if (isSubmit) {
      axios.post(
        'http://localhost:8000/user/login',
        {
          user_name: '',
          email: infos.email,
          password: infos.password,
        },
        {},
      ).then((response) => {
        if (response) {
          changeIsLoggined(true);
          changeName(response.name);
          changeEmail(response.email);
          console.log('로그인됨');
          history.push('/')
        } else {
          alert('이메일 혹은 비밀번호가 틀렸습니다.');
        }
      }).catch((error) => {
        console.log(error);
        alert('이메일 혹은 비밀번호가 틀렸습니다.');
      });
    }
  })

  
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
            onClick={() => buttonHandler()}
          >
            LOG IN
          </button>
          <button
            className={styles.signUpButton}
            onClick={() => history.push('/signup')}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

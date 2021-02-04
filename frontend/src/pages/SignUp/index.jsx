import React, { useState } from 'react'

import signupstyle from './signup.module.css'
import logo from '../../imgs/logo.png'


const App = () => {
  const styles = signupstyle
  const [infos, setInfos] = useState({
    email: '',
    password: '',
    password_confirm: '',
    name: '',
    school: '',
    department: '',
    인증번호: ''
  })

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInfos(infos => ({...infos, [name]: value}));
  }

  return (
    <div className={styles.container}>
      <div className={styles.signUpContainer}>
        <img
          src={logo}
          alt='logo'
          className={styles.logoContainer}
        />
        <div className={styles.emailContainer}>
          <input
            className={styles.emailBox}
            placeholder='EMAIL'
            name='email'
            value={infos['email']}
            onChange={(e) => onChangeHandler(e)}
          />
          <button
            className={styles.emailRequestBtn}
            // onclick={}
          >
            요청
          </button>
        </div>
        <input
          className={styles.inputBox}
          placeholder='인증번호'
          name='인증번호'
          value={infos['인증번호']}
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          className={styles.inputBox}
          placeholder='PASSWORD'
          name='password'
          value={infos['password']}
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          className={styles.inputBox}
          placeholder='PASSWORD CONFIRM'
          name='password_confirm'
          values={infos['password_confirm']}
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          className={styles.inputBox}
          placeholder='NAME'
          name='name'
          value={infos['name']}
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          className={styles.inputBox}
          placeholder='SCHOOl'
          name='school'
          value={infos['school']}
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          className={styles.inputBox}
          placeholder='DEPARTMENT'
          name='department'
          value={infos['department']}
          onChange={(e) => onChangeHandler(e)}
        />
        <div className={styles.signUpBtnContainer}>
          <button
            className={styles.signUpBtn}
          >
            회원가입 완료
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

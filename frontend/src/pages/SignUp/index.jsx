

import React, { useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'

import signupstyle from './signup.module.css'
import logo from '../../imgs/logo.png'
import axios from 'axios'


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function isEmail(asValue) {
  // eslint-disable-next-line
	var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	return regExp.test(asValue); 
}

function isValid(infos) {
  if (!isEmail(infos.email)) {
    return 1;
  } else if (!(infos.password === infos.password_confirm)) {
    return 2;
  } else if (Object.values(infos).some( function (it) { return it === ''; } )) {
    return 3;
  } else {
    return 0;
  }
}

const useIsMount = () => {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};


const App = () => {
  const styles = signupstyle
  const history = useHistory()
  const [isSubmit, setSubmit] = useState(false);
  const [infos, setInfos] = useState({
    email: '',
    password: '',
    password_confirm: '',
    name: '',
    school: '',
    major: '',
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

  const isMount = useIsMount();
  useEffect(() => {
    
    let nCheck = isValid({...infos});
    if (isMount || !isSubmit) {
      return;
    }
    if (nCheck === 0) {
      console.log('is valid')
    }
    else if (nCheck === 1) {
      alert('정확한 이메일 주소를 입력하세요.');
    } else if (nCheck === 2) {
      alert('동일한 비밀번호를 입력하세요.');
    } else if (nCheck === 3){
      alert('빈 칸이 있습니다.');
    } else {
      alert('잘못된 값입니다.');
    }

    if (!nCheck) {
      axios.post(
        'http://localhost:8000/user/create',
        {
          email: infos.email,
          password: infos.password,
          user_name: infos.name,
          school_name: infos.school,
          major: infos.major,
        },
        {},
      ).then((response) => {
        console.log(response)
        if (response.status === 200) {
          alert('회원 가입되었습니다');
          console.log('가입되었습니다.');
          history.push('/login');
        } else {
          alert('회원 가입 거부됨.');
        }
      }).catch((error) => {
        console.log(error);
        alert('이미 존재하는 이메일입니다.');
        
      });
    }
    // eslint-disable-next-line
  }, [isSubmit])


  return (
    <div className={styles.container}>
      <div className={styles.signUpContainer}>
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
          type='password'
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          className={styles.inputBox}
          placeholder='PASSWORD CONFIRM'
          name='password_confirm'
          values={infos['password_confirm']}
          type='password'
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
          placeholder='SCHOOL'
          name='school'
          value={infos['school']}
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          className={styles.inputBox}
          placeholder='MAJOR'
          name='major'
          value={infos['major']}
          onChange={(e) => onChangeHandler(e)}
        />
        <div className={styles.signUpBtnContainer}>
          <button
            className={styles.signUpBtn}
            onClick={() => buttonHandler()}
          >
            회원가입 완료
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

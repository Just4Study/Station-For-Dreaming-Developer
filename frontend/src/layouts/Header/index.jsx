import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import headerStyle from './header.module.css'
import logo from '../../imgs/logo.png'

import useRootData from '../../stores/useRootData'

const App = (props) => {
  const styles = headerStyle

  const { name } = useRootData(({ authStore }) => ({
    name: authStore.name.get()
  }))

  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const pathName = window.location.pathname
    if(pathName.indexOf('/login') !== -1 || pathName.indexOf('/signup') !== -1) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [])

  props.history.listen((location) => {
    if(location['pathname'].indexOf('/login') !== -1 || location['pathname'].indexOf('/signup') !== -1) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  })

  const history = useHistory()
  const toHome = () => {
    history.push('/')
  }
  const toMentor = () => {
    history.push('/mentor')
  }
  const toMessage = () => {
    history.push('/message')
  }

  return (
    <div>
    { visible && 
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <div className={styles.leftMenuContainer}>
            <div className={styles.left1}>
              <span 
                className={styles.toHome}
                onClick={() => toHome()}
              >
                팀원 모집
              </span>
            </div>
            <div className={styles.left2}>
              <span 
                className={styles.toMentor}
                onClick={() => toMentor()}
              >
                전문가 인터뷰
              </span>
            </div>
          </div>
          <div>
            <img
              src={logo}
              alt='logo'
              className={styles.logoContainer}
              onClick={() => toHome()}
            />
          </div>
          <div className={styles.rightMenuContainer}>
            <div className={styles.right2}>
              <span 
                className={styles.toMessage}
                onClick={() => toMessage()}
              >
                쪽지
              </span>
            </div>
            <div className={styles.right1}>
              {name}
            </div>
          </div>
        </div>
      </div>
    }
    </div>
  )
}

export default App

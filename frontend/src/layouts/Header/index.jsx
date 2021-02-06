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
            <img
              src={logo}
              alt='logo'
              className={styles.logo}
              onClick={() => toHome()}
            />
            <div className={styles.headerContentContainer}>
              <span 
                className={styles.headerContent}
                onClick={() => toHome()}
              >
                팀원 모집
              </span>
              <span 
                className={styles.headerContent}
                onClick={() => toMentor()}
              >
                전문가 인터뷰
              </span>          
              <span className={styles.headerContent}>
                어서오세요 {name}님!
              </span>
            </div>
        </div>
      </div>
    }
    </div>
  )
}

export default App

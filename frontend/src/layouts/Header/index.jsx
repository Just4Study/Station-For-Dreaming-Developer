import React, { useState, useEffect } from 'react'

import headerStyle from './header.module.css'
import logo from '../../imgs/logo.png'

// eslint-disable-next-line
import { withRouter } from 'react-router-dom';

function useWindowSize() {
  const [size, setSize] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  }, [])
  return size
}

const App = (props) => {
  const styles = headerStyle
  // eslint-disable-next-line
  const height = useWindowSize
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

  return (
    <div>
    { visible && 
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <div className={styles.leftMenuContainer}>
            <div className={styles.left1}>
              팀원 모집
            </div>
            <div className={styles.left2}>
              전문가 인터뷰
            </div>
          </div>
          <div>
            <img
              src={logo}
              alt='logo'
              className={styles.logoContainer}
              //onClick
            />
          </div>
          <div className={styles.rightMenuContainer}>
            <div className={styles.right2}>
              쪽지
            </div>
            <div className={styles.right1}>
              홍길동
            </div>
          </div>
        </div>
      </div>
    }
    </div>
  )
}

export default App

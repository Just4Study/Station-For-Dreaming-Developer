import React, { useState, useEffect } from 'react'

import headerStyle from './header.module.css'
import logo from '../../imgs/logo.png'

import { withRouter } from 'react-router-dom';

const App = (props) => {
  const styles = headerStyle
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const pathName = window.location.pathname
    if(pathName.indexOf('/signin') !== -1 || pathName.indexOf('/signup') !== -1) {
      setVisible(false);
    } else {
      setVisible(false);
    }
  }, [])

  props.history.listen((location) => {
    if(location['pathname'].indexOf('/signin') !== -1 || location['pathname'].indexOf('/signup') !== -1) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  })

  return (
    <div>
    { visible && 
      <div className={styles.container}>
        <div
          className={styles.headerContainer}
        >
          <img
            src={logo}
            alt='logo'
            className={styles.logoContainer}
            //onClick
          />
          <div
            className={styles.menuContainer}
          >
            aaaaa
          </div>
          <div
            className={styles.menuContainer}
          >
            bbbbb
          </div>
        </div>
      </div>
    }
    </div>
  )
}

export default App

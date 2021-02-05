// import React, { useState } from 'react'

import style from './teampage.module.css'
import logo from '../../imgs/logo.png'

const App = () => {
    const styles = style;
    // const [val, setVal] = useState(0);
    
    return (
        <div className={styles.container}>
            <img
                src={logo}
                alt='logo'
                className={styles.logoContainer}
            />
        </div>
    )
}

export default App

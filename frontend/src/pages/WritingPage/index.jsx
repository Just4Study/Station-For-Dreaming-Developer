// import React, { useState } from 'react'

import style from './writingpage.module.css'

const App = () => {
    const styles = style;
    // const [val, setVal] = useState(0);

    return (
        <div className={styles.container}>
            <div className={styles.maincontainer}>
                <div className={styles.titleBox}>
                    <input className={styles.title}
                        placeholder='타이틀'>
                    </input>
                    <input className={styles.author}
                        placeholder='글쓴이'>
                    </input>
                    <input className={styles.teamtype}
                        placeholder='팀종류'>
                    </input>
                    <input className={styles.category}
                        placeholder='카테고리'>
                    </input>
                </div>
                <hr></hr>
                <div className={style.contentBox}>
                    <input className={styles.deadline}
                        placeholder='마감일'>
                    </input>
                    <input className={styles.address}
                        placeholder='거주지'>
                    </input>
                    <div className={style.textarealabel}>
                        업무 소개
                    </div>
                    <textarea className={style.introductionarea}
                        id="introduction"
                        name="introduction">
                    </textarea>
                    <div className={style.textarealabel}>
                        우대 사항
                    </div>
                    <textarea className={style.eligibilityarea}
                        id="introduction"
                        name="introduction">
                    </textarea>
                    <button className={style.postbutton}>
                        글 등록하기
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App

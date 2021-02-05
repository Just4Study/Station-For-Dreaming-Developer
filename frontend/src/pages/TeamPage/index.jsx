// import React, { useState } from 'react'

import style from './teampage.module.css'

const App = () => {
    const styles = style;
    // const [val, setVal] = useState(0);

    return (
        <div className={styles.container}>
            <div className={styles.maincontainer}>
                <div className={styles.titleBox}>
                    <div className={styles.title}>
                        타이틀
                    </div>
                    <div className={styles.author}>
                        글쓴이
                    </div>
                    <div className={styles.teamtype}>
                        팀종류
                    </div>
                    <div className={styles.category}>
                        카테고리
                    </div>
                </div>
                <hr></hr>
                <div className={style.contentBox}>
                    <div className={styles.deadline}>
                        마감일
                    </div>
                    <div className={styles.address}>
                        거주지
                    </div>
                    <div className={style.textarealabel}>
                        업무 소개
                    </div>
                    <textarea className={style.introductionarea}
                        id="introduction"
                        name="introduction">
                    </textarea>
                    <div className={style.textarealabel}>
                        자격 조건
                    </div>
                    <textarea className={style.eligibilityarea}
                        id="introduction"
                        name="introduction">
                    </textarea>
                    <div className={style.textarealabel}>
                        우대 사항
                    </div>
                    <textarea className={style.preferentialerea}
                        id="introduction"
                        name="introduction">
                    </textarea>

                </div>
            </div>
        </div>
    )
}

export default App

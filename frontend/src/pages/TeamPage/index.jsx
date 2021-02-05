import React, { useState } from 'react'

import style from './teampage.module.css'

const App = ({match}) => {
    const styles = style;
    // const [val, setVal] = useState(0);
    const [title, setTitle] = useState('타이틀')
    const [author, setAuthor] = useState('글쓴이')
    const [teamType, setTeamType] = useState('팀종류')
    const [category, setCategory] = useState('카테고리')
    const [deadLine, setDeadLine] = useState('마감일')
    const [address, setAddress] = useState('거주지')
    const [introduction, setIntroduction] = useState('업무 소개')
    const [qualification, setQualification] = useState('자격 요건')
    const [eligibility, setEligibility] = useState('우대 사항')

    const { pageId } = match.params;
    console.log(pageId)

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
                        name="introduction"
                        readonly="readonly">
                    </textarea>
                    <div className={style.textarealabel}>
                        우대 사항
                    </div>
                    <textarea className={style.preferentialerea}
                        id="introduction"
                        name="introduction"
                        readonly="readonly">
                    </textarea>

                </div>
            </div>
        </div>
    )
}

export default App

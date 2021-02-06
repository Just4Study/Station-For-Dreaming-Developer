import React, { useState, useEffect } from 'react'
import axios from 'axios'

import style from './teampage.module.css'

const App = ({match}) => {
    const styles = style;
    // const [val, setVal] = useState(0);
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [teamType, setTeamType] = useState('')
    const [category, setCategory] = useState('')
    const [deadLine, setDeadLine] = useState('')
    const [address, setAddress] = useState('')
    const [introduction, setIntroduction] = useState('')
    const [preference, setPreference] = useState('')

    const { pageId } = match.params;

    useEffect(() => {
        axios.get('http://localhost:8000/post/' + pageId)
        .then(response => {
          console.log(response)
          setTitle(response.data['title'])
          setAuthor(response.data['author'])
          setTeamType(response.data['team_type'])
          setCategory(response.data['dev_category'])
          setDeadLine(response.data['end_date'])
          setAddress(response.data['region'])
          setIntroduction(response.data['comment'])
          setPreference(response.data['preference'])
        })
        .catch(error=> {
          console.log(error);
        })
    }, [pageId])

    return (
        <div className={styles.container}>
            <div className={styles.maincontainer}>
                <div className={styles.titleBox}>
                    <h1>{title}</h1>
                </div>
                <div className={styles.formBox}>
                    <div className={styles.formCategory}>
                        기본 사항
                    </div>
                    <div className={styles.formContent}>
                        <span className={styles.formName}>작성자</span>
                        <div className={styles.formOutput}>
                            {author}
                        </div>
                        <span className={styles.formName}>팀유형</span>
                        <div className={styles.formOutput}>
                            {teamType}
                        </div>
                        <span className={styles.formName}>개발분야</span>
                        <div className={styles.formOutput}>
                            {category}
                        </div>
                        <span className={styles.formName}>마감일</span>
                        <div className={styles.formOutput}>
                            {deadLine}
                        </div>
                        <span className={styles.formName}>선호 지역</span>
                        <div className={styles.formOutput}>
                            {address}
                        </div>
                    </div>
                </div>
                <div className={styles.formBox}>
                    <div className={styles.formCategory}>
                        팀 소개
                    </div>
                    <div className={styles.formContent}>
                        <textarea className={style.introductionarea}
                        id="introduction"
                        name="introduction"
                        readonly="readonly"
                        value={introduction}
                        >       
                        </textarea>
                    </div>
                </div>
                <div className={styles.formBox}>
                    <div className={styles.formCategory}>
                        바라는 점
                    </div>
                    <div className={styles.formContent}>
                        <textarea className={style.preferentialerea}
                        id="introduction"
                        name="introduction"
                        readonly="readonly"
                        value={preference}
                        >       
                        </textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App

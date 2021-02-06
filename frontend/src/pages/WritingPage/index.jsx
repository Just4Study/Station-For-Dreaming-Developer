import React, { useState } from 'react'

import style from './writingpage.module.css'
import axios from 'axios';

import { useHistory } from 'react-router-dom'

const App = () => {
    const styles = style;


    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [teamType, setTeamType] = useState('')
    const [category, setCategory] = useState('')
    const [deadline, setDeadline] = useState('')
    const [address, setAddress] = useState('')
    const [introduction, setIntroduction] = useState('')
    const [preferential, setPreferential] = useState('')

    const history = useHistory()

    const postRegistration = () => {
        axios.post('http://localhost:8000/post/', {
            title: title,
            author: author,
            team_type: teamType,
            region: address,
            end_date: deadline,
            preference : preferential,
            dev_category: category,
            comment: introduction,
        })
        .then(response => {
            if(response.status === 200 || response.status === 201) {
                alert('성공적으로 등록했습니다.')
                history.push('/')
            } else {
                alert('잘못된 정보가 있습니다.')
            }
        })
        .catch(error=> {
            console.log(error);
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.maincontainer}>
                <div className={styles.titleBox}>
                    <h1>팀 모집글</h1>
                </div>
                <div className={styles.formBox}>
                    <div className={styles.formCategory}>
                        기본 사항
                    </div>
                    <div className={styles.formContent}>
                        <span className={styles.formName}>제목</span>
                        <input className={styles.formInput}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}>
                        </input>
                        <span className={styles.formName}>작성자</span>
                        <input className={styles.formInput}
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}>
                        </input>
                        <span className={styles.formName}>팀유형</span>
                        <input className={styles.formInput}
                            value={teamType}
                            onChange={(e) => setTeamType(e.target.value)}>
                        </input>
                        <span className={styles.formName}>개발분야</span>
                        <input className={styles.formInput}
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}>
                        </input>
                        <span className={styles.formName}>마감일</span>
                        <input type="date" className={styles.formInput}
                            value={deadline}
                            placeholder="연도-월-일"
                            onChange={(e) => setDeadline(e.target.value)}>
                        </input>
                        <span className={styles.formName}>선호 지역</span>
                        <input className={styles.formInput}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}>
                        </input>
                    </div>
                </div>
                <div className={style.formBox}>
                    <div className={style.formCategory}>
                        팀 소개
                    </div>
                    <div className={styles.formContent}>
                        <textarea className={style.introductionarea}
                            id="introduction"
                            name="introduction"
                            value={introduction}
                            onChange={(e) => setIntroduction(e.target.value)}>
                        </textarea>
                    </div>
                </div>
                <div className={style.formBox}>
                    <div className={style.formCategory}>
                        바라는 점
                    </div>
                    <div className={styles.formContent}>
                        <textarea className={style.preferentialerea}
                            id="preferential"
                            name="preferential"
                            value={preferential}
                            onChange={(e) => setPreferential(e.target.value)}>
                        </textarea>
                    </div>
                </div>
                <button 
                    className={style.postbutton}
                    onClick={() => postRegistration()}
                >
                    등록!
                </button>
            </div>
        </div>
    )
}

export default App

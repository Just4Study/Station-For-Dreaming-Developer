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
            // end_date: deadline,
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
                    <input className={styles.title}
                        placeholder='타이틀'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}>
                    </input>
                    <input className={styles.author}
                        placeholder='글쓴이'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}>
                    </input>
                    <input className={styles.teamtype}
                        placeholder='팀종류'
                        value={teamType}
                        onChange={(e) => setTeamType(e.target.value)}>
                    </input>
                    <input className={styles.category}
                        placeholder='카테고리'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}>
                    </input>
                </div>
                <hr></hr>
                <div className={style.contentBox}>
                    <input className={styles.deadline}
                        placeholder='마감일'
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}>
                    </input>
                    <input className={styles.address}
                        placeholder='거주지'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}>
                    </input>
                    <div className={style.textarealabel}>
                        업무 소개
                    </div>
                    <textarea className={style.introductionarea}
                        id="introduction"
                        name="introduction"
                        value={introduction}
                        onChange={(e) => setIntroduction(e.target.value)}>
                    </textarea>
                    <div className={style.textarealabel}>
                        우대 사항
                    </div>
                    <textarea 
                        className={style.preferentialerea}
                        id="preferential"
                        name="preferential"
                        value={preferential}
                        onChange={(e) => setPreferential(e.target.value)}>
                    </textarea>
                    <button 
                        className={style.postbutton}
                        onClick={() => postRegistration()}
                    >
                        글 등록하기
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App

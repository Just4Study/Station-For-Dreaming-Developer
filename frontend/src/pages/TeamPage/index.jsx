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
                    <div className={styles.title}>
                        {title}
                    </div>
                    <div className={styles.author}>
                        {author}
                    </div>
                    <div className={styles.teamtype}>
                        {teamType}
                    </div>
                    <div className={styles.category}>
                        {category}
                    </div>
                </div>
                <hr></hr>
                <div className={style.contentBox}>
                    <div className={styles.deadline}>
                        {deadLine}
                    </div>
                    <div className={styles.address}>
                        {address}
                    </div>
                    <div className={style.textarealabel}>
                        업무 소개
                    </div>
                    <textarea className={style.introductionarea}
                        id="introduction"
                        name="introduction"
                        readonly="readonly"
                        value={introduction}
                    >
                    </textarea>
                    <div className={style.textarealabel}>
                        선호
                    </div>
                    <textarea className={style.eligibilityarea}
                        id="introduction"
                        name="introduction"
                        readonly="readonly"
                        value={preference}>
                    </textarea>
                </div>
            </div>
        </div>
    )
}

export default App

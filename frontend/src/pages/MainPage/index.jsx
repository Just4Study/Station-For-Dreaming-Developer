import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import filter from '../../imgs/filter.png'

import mainPageStyle from './mainPage.module.css'


const App = () => {
  const history = useHistory()
  const toWrite = () => {
    history.push('/writing')
  }
  const toTeamPage = (url) => {
    history.push(url)
  }

  const styles = mainPageStyle

  const [cards, setCards] = useState([])


  useEffect(() => {
    axios.get('http://localhost:8000/post/')
      .then(response => {
        setCards(response.data)
      })
      .catch(error=> {
        console.log(error);
      })
  }, [])

  const type_list = ['창업', '프로젝트', '대회']
  const team_types = type_list.map((option) => {
    return <option value={option} key={option}>{option}</option>
  })
  const [currType, setCurrType] = useState('') // current option
  const onTypeChangeHandler = (e) => {
    setCurrType(e.target.value)
  }

  const category_list = ['Web', 'App', 'AI']
  const categories = category_list.map((option) => {
    return <option value={option} key={option}>{option}</option>
  })
  const [currCategory, setCurrCategory] = useState('') // current option
  const onCategoryChangeHandler = (e) => {
    setCurrCategory(e.target.value)
  }

  const onChangeHandler = (url) => {
    axios.get(url)
      .then(response => {
        setCards(response.data)
      })
      .catch(error=> {
        console.log(error);
      })
  }

  useEffect(() => {
    let url = 'http://localhost:8000/post?';
    if(currType !== '' && currCategory !== '') {
      onChangeHandler(url + 'team_type=' + currType + '&dev_category=' + currCategory)
    } else if(currType === '' && currCategory !== '') {
      onChangeHandler(url + 'dev_category=' + currCategory)
    } else if(currType !== '' && currCategory === '') {
      onChangeHandler(url + 'team_type=' + currType)
    } else {
      onChangeHandler('http://localhost:8000/post')
    }
  }, [currType, currCategory])

  return (
    <div className={styles.container}>
      <div className={styles.subHeaderContainer}>
        <div className={styles.filterImgContainer}>
          <img
              src={filter}
              alt='filter'
              className={styles.filterImg}
          />
        </div>
        <div className={styles.filterContainer}>
          <select
            className={styles.filterBox}
            value={currType}
            onChange={(e) => onTypeChangeHandler(e)}
          >
            <option value='' selected>팀유형</option>
            {team_types}
          </select>
          <select
            className={styles.filterBox}
            value={currCategory} 
            onChange={(e) => onCategoryChangeHandler(e)}
          >
            <option value='' selected>개발분야</option>
            {categories}
          </select>
        </div>
        <div 
          className={styles.penImgContainer}
          onClick={() => toWrite()}
        >
          <button className={styles.writeButton}>글쓰기</button> 
        </div>
      </div>
      <div className={styles.cardsContainer}>
        {cards.map((card) => {
          let url = '/team/' + card['auto_id']
          return (
            <div className={styles.cardContainer}>
              <div className={styles.cardTeamType}>
                {card['team_type']}
              </div>  
              <div 
                className={styles.cardTitle}
                onClick={() => toTeamPage(url)}
              >
                {card['title']}
              </div>
              <div className={styles.cardAuthor}>
                {card['author']}
              </div>
              <div className={styles.cardCategoryBox}>
                {card['dev_category']}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App


import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

// import { useHistory } from 'react-router-dom'

// import useRootData from '../../stores/useRootData'
import filter from '../../imgs/filter.png'
import pen from '../../imgs/pen.jpg'

import mainPageStyle from './mainPage.module.css'


const App = () => {
  //const history = useHistory()
  //useEffect(() => {
  //  if(!isLoggined) {
  //    history.push('/signin')
  //  }
  //}, [])

  const history = useHistory()
  const toWrite = () => {
    history.push('/writingpage')
  }
  const toTeamPage = (url) => {
    console.log(url)
    history.push(url)
  }

  const styles = mainPageStyle

  const [cards, setCards] = useState([])


  useEffect(() => {
    axios.get('http://localhost:8000/post/')
      .then(response => {
        console.log(response)
        setCards(response.data)
      })
      .catch(error=> {
        console.log(error);
      })
  }, [])

  const category_list = ['Web', 'App', 'AI']
  const categories = category_list.map((option) => {
    return <option value={option} key={option}>{option}</option>
  })
  const [currCategory, setCurrCategory] = useState('') // current option
  const onCategoryChangeHandler = (e) => {
    setCurrCategory(e.target.value)
  }

  const type_list = ['창업', '프로젝트', '대회']
  const team_types = type_list.map((option) => {
    return <option value={option} key={option}>{option}</option>
  })
  const [currType, setCurrType] = useState('') // current option
  const onTypeChangeHandler = (e) => {
    setCurrType(e.target.value)
  }

  useEffect(() => {
    // axios로 카드들 가져와서 state : cards에 넣어두기.
    // 아래는 예시
    /*
    let cards = [
      {
        title: 'title1',
        author: 'author1',
        team_type: 'team_type1',
        dev_categories: 'Web',
        id:1,
      },
      {
        title: 'title2',
        author: 'author2',
        team_type: 'team_type2',
        dev_categories: 'Web',
        id:2,
      },
    ]
    setCards(cards)
    */
  }, [])

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
            value={currCategory}
            onChange={(e) => onCategoryChangeHandler(e)}
          >
            <option value='' selected disabled hidden>팀 종류</option>
            {categories}
          </select>
          <select
            className={styles.filterBox}
            value={currType} 
            onChange={(e) => onTypeChangeHandler(e)}
          >
            <option value='' selected disabled hidden>카테고리</option>
            {team_types}
          </select>
        </div>
        <div 
          className={styles.penImgContainer}
          onClick={() => toWrite()}
        >
          <img
              src={pen}
              alt='pen'
              className={styles.penImg}
          />
        </div>
      </div>
      <div className={styles.cardsContainer}>
        {cards.map((card) => {
          let url = '/teampage/' + card['auto_id']
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

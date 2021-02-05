
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

// import { useHistory } from 'react-router-dom'

import mentorPageStyle from './mentorpage.module.css'

import logo from '../../imgs/logo.png'


const App = () => {
  //const history = useHistory()
  //useEffect(() => {
  //  if(!isLoggined) {
  //    history.push('/signin')
  //  }
  //}, [])

  const history = useHistory()
  const toTeamPage = (url) => {
    console.log(url)
    history.push(url)
  }

  useEffect(() => {
    axios.get('http://localhost:8000/post/')
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  const styles = mentorPageStyle

  const [cards, setCards] = useState([])



  useEffect(() => {
    // axios로 카드들 가져와서 state : cards에 넣어두기.
    // 아래는 예시
    let cards = [
      {
        title: 'title1',
        author: 'author1',
        team_type: 'team_type1',
        dev_categories: 'Web',
        id: 1,
      },
      {
        title: 'title2',
        author: 'author2',
        team_type: 'team_type2',
        dev_categories: 'Web',
        id: 2,
      },
      {
        title: 'title2',
        author: 'author2',
        team_type: 'team_type2',
        dev_categories: 'Web',
        id: 3,
      },
      {
        title: 'title2',
        author: 'author2',
        team_type: 'team_type2',
        dev_categories: 'Web',
        id: 4,
      },
      {
        title: 'title2',
        author: 'author2',
        team_type: 'team_type2',
        dev_categories: 'Web',
        id: 1,
      },
      {
        title: 'title2',
        author: 'author2',
        team_type: 'team_type2',
        dev_categories: 'Web',
        id: 1,
      },
      {
        title: 'title2',
        author: 'author2',
        team_type: 'team_type2',
        dev_categories: 'Web',
        id: 1,
      },
      {
        title: 'title2',
        author: 'author2',
        team_type: 'team_type2',
        dev_categories: 'Web',
        id: 1,
      },
      {
        title: 'title2',
        author: 'author2',
        team_type: 'team_type2',
        dev_categories: 'Web',
        id: 1,
      },
      {
        title: 'title2',
        author: 'author2',
        team_type: 'team_type2',
        dev_categories: 'Web',
        id: 1,
      },
      {
        title: 'title2',
        author: 'author2',
        team_type: 'team_type2',
        dev_categories: 'Web',
        id: 1,
      },
    ]
    setCards(cards)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        {cards.map((card) => {
          let url = '/teampage/' + card['id']
          return (
            <div className={styles.cardContainer}>
              <div className={styles.cardimgbox}>
                <img
                  className={styles.cardImg}
                  src={logo}
                  alt="img"
                />
              </div>
              <div className={styles.cardcontentbox}>
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
                  {card['dev_categories']}
                </div>
                <div className={styles.cardTeamType}>
                  {card['team_type']}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App

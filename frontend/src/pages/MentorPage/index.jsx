
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import mentorPageStyle from './mentorpage.module.css'


const App = () => {

  const styles = mentorPageStyle

  const [cards, setCards] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/mentor/')
      .then(response => {
        console.log(response.data)
        setCards(response.data)
      })
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        {cards.map((card) => {
          return (
            <div className={styles.cardContainer}>
              <div className={styles.cardimgbox}>
                <img
                  className={styles.cardImg}
                  src={card['image']}
                  alt="img"
                />
              </div>
              <div className={styles.cardcontentbox}>
                <div
                  className={styles.cardTitle}
                  onClick={() => window.location.assign('https://' + card['url'])}
                >
                  {card['name']}
                </div>
                <div className={styles.cardAuthor}>
                  {card['company']}
                </div>
                <div className={styles.cardCategoryBox}>
                  {card['dev_category']}
                </div>
                <div className={styles.cardTeamType}>
                  {card['content']}
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

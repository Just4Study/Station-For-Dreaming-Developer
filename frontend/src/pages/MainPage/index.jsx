import React, { useState, useEffect } from 'react'

import mainPageStyle from './mainPage.module.css'


const App = () => {
  const styles = mainPageStyle
  const [cards, setCards] = useState([])

  const category_list = ['앱', '웹', 'AI']
  const categories = category_list.map((option) => {
    return <option value={option} key={option}>{option}</option>
  })
  const [currCategory, setCurrCategory] = useState('웹') // current option
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
    let cards = [
      {
        title: 'title1',
        author: 'author1',
        team_type: 'team_type1',
        dev_categories: ['웹', '앱'],
      },
      {
        title: 'title2',
        author: 'author2',
        team_type: 'team_type2',
        dev_categories: ['웹', '앱'],
      }
    ]
    setCards(cards)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.subHeaderContainer}>
        <div className={styles.filterContainer}>
          <select
            value={currCategory}
            onChange={(e) => onCategoryChangeHandler(e)}>
            {categories}
          </select>
          <select
            value={currType} 
            onChange={(e) => onTypeChangeHandler(e)}>
            {team_types}
          </select>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        {cards.map((card) => {
          return (
            <div
              className={styles.cardContainer}
            >
              <div className={styles.cardTeamType}>
                {card['team_type']}
              </div>
              <div className={styles.cardTitle}>
                {card['title']}
              </div>
              <div className={styles.cardAuthor}>
                {card['author']}
              </div>
              <div className={styles.cardCategories}>
                {card['dev_categories'].map((category) => {
                  return (
                    <span className={styles.cardCategoryBox}>
                      {category}
                    </span>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App

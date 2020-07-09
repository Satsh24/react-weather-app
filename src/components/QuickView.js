import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { getDay } from './utils'

const QuickView = () => {
  const [searchText, setSearchText] = useState('')

  const handleInputChange = (event) => {
    const text = event.target.value
    setSearchText(text)
  }
  return (
    <div className='side-layout-container'>
      <div className='side-layout-content'>
        <div className='search'>
          <FontAwesomeIcon icon={faSearch} className='search-icon' />
          <input
            className='search-input'
            aria-label='search'
            placeholder='Search places'
            value={searchText}
            onChange={handleInputChange}
          />
          <div className='search-suggestions '>{searchText}</div>
        </div>
        <div className='city'>
          <h3>Dallas,TX</h3>
        </div>
        <hr />
        <div className='temperature-numbers'>
          <p> {getDay()}</p>
          70&#8451;
          <p> Mostly Cloudy</p>
          <p> Rain - 30%</p>
        </div>
        <hr />
        <div className='contact'>
          Made with{' '}
          <span role='img' aria-labelledby='love-emoji'>
            ❤️
          </span>{' '}
          by Satish Boppana
          <div className='contact-icons'>
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickView

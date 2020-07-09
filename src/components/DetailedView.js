import React from 'react'
import HumidityIcon from 'components/assets/humidity.svg'
import PressureIcon from 'components/assets/pressure.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWind,
  faCloudSun,
  faCloudMoon,
  faEye,
  faSnowflake
} from '@fortawesome/free-solid-svg-icons'

const DetailedView = () => {
  return (
    <section className='center-layout-container'>
      <div className='center-layout-content'>
        <div className='select-day'>
          <button>Today</button> <button> Week</button>
        </div>
        <div className='week-days'>
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <h5>Today&apos;s Weather</h5>
        <div className=' week-days weather-details '>
          <div>
            <h4>Humidity</h4>
            <div className='weather-content'>
              <p>70%</p>
              <img alt='humidity' src={HumidityIcon} />
            </div>
          </div>
          <div>
            <h4>Pressure</h4>
            <div className='weather-content'>
              <p>100pa </p>
              <img alt='humidity' src={PressureIcon} />
            </div>
          </div>
          <div>
            <h4>WindSpeed</h4>
            <div className='weather-content'>
              <p>70 m/hr</p>
              <FontAwesomeIcon icon={faWind} color='#fea315' size='2x' />
            </div>
          </div>
          <div>
            <h4> Sunrise & Sundset</h4>
            <div className='weather-content sun-rise'>
              <span>
                7am
                <FontAwesomeIcon
                  icon={faCloudSun}
                  color='#fea315'
                  style={{ paddingLeft: '20px' }}
                />
              </span>
              <span>
                7pm
                <FontAwesomeIcon
                  icon={faCloudMoon}
                  color='#fea315'
                  style={{ paddingLeft: '20px' }}
                />
              </span>
            </div>
          </div>
          <div>
            <h4>Visibility</h4>
            <div className='weather-content'>
              <p>10 miles</p>
              <FontAwesomeIcon icon={faEye} color='#fea315' size='2x' />
            </div>
          </div>
          <div>
            <h4>Feels Like</h4>
            <div className='weather-content'>
              <p>60</p>
              <FontAwesomeIcon icon={faSnowflake} color='#fea315' size='2x' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

DetailedView.propTypes = {}

export default DetailedView

import React from 'react'
import './App.css'
import QuickView from 'components/QuickView'
import DetailedView from 'components/DetailedView'

function App() {
  return (
    <div className='app'>
      <div className='app-content'>
        <div>
          <QuickView />
        </div>
        <div>
          <DetailedView />
        </div>
      </div>
      <div style={{ position: 'fixed', right: '0', bottom: '0' }}>
        <span>
          Photo by
          <a href='https://unsplash.com/@freezydreamin?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>
            @freezydreamin
          </a>{' '}
          on{' '}
          <a href='https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>
            Unsplash
          </a>
        </span>
      </div>
    </div>
  )
}

export default App

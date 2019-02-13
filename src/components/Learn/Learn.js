import React from 'react'
import './Learn.scss'

const Learn = ({ content }) => {
  return (
    <div>
      <h3 className="Learn__header">Learn</h3>
      <div className="Learn__content" dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  )
}

export default Learn;
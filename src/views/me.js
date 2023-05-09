import React from 'react'

import { Helmet } from 'react-helmet'

import './me.css'

const Me = (props) => {
  return (
    <div className="me-container">
      <Helmet>
        <title>Me - alugmatic</title>
        <meta property="og:title" content="Me - alugmatic" />
      </Helmet>
      <div className="me-container1">
        <div className="me-container2">
          <h1 className="me-text">Kristalli Arvoitus</h1>
          <span className="me-text1">
            I&apos;m a jack of all trades and master of none, and yata yata
            you&apos;ve already heard this one.
          </span>
        </div>
        <div className="me-container3"></div>
        <img
          alt="image"
          src="/playground_assets/pricing-600h.png"
          className="me-image"
        />
      </div>
    </div>
  )
}

export default Me

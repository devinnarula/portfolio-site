import React from 'react'
import Layout from '../components/layout'
import './index.css'

const Index = () => {
  const imgSrc = require('../img/Profile.jpg')
    return (
        <Layout>
            <div className="index-container">
              <img className="index-img" src={imgSrc} />
              <p className="index-about">This is me!</p>
            </div>
        </Layout>
    )
}

export default Index
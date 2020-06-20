import React from 'react'
import './imageLink.css'

const ImageLink = (props) => {
    const imgSrc = require('../img/Profile.jpg')
    let target='_self'
    if(props.isExternal){
        target='_blank'
    }
    return (
        <a href={`${props.link}`} target={target} className='MediaLink-Container'>
            <img className="MediaLink-img" src={props.imgSrc} />
            <h1 className="MediaLink-handle">{props.title}</h1>
        </a>
    )
}

export default ImageLink
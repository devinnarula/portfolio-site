import React from 'react'
import Layout from '../../components/layout'
import ImageLink from '../../components/imageLink'
import './index.css'

const Projects = () => {
    const imgSrc = require('../../img/project.jpeg')
    const defaultProps = {
        projectSections: [
            {imgSrc: require('../../img/webdev.jpeg'), title: 'Web Development', link: '/projects/webdevelopment', isExternal: false},
            {imgSrc: require('../../img/appstore.png'), title: 'iOS Applications', link: '/projects/iosapplications', isExternal: false},
            {imgSrc: require('../../img/coursework.jpeg'), title: 'Related Coursework', link: '/projects/relatedcoursework', isExternal: false},
            {imgSrc: require('../../img/research.jpeg'), title: 'Research', link: '/projects/research', isExternal: false}
        ]
    }
    return (
        <Layout>
            <div className="Projects-container">
              <img className="Projects-img" src={imgSrc} />
                <div>
                <h1 className="Projects-title">Projects:</h1>
                <p className="Projects-about">
                    I am always trying to expand my knowledge and explore new and interesting topics! The following sections show some of my projects and highlight my experiences with programming and computer science. These sections include many areas of my work. Some of which is published online for public use and some are experimental projects.
                </p>
              </div>
            </div>
            <div className='Projects-ImageLinks'>
                {defaultProps.projectSections.map((p) => (
                    <ImageLink imgSrc={p.imgSrc} title={p.title} link={p.link} isExternal={p.isExternal} />
                ))}
            </div>
        </Layout>
    )
}

export default Projects
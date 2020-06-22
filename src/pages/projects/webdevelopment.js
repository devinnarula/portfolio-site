import React from 'react'
import { graphql, useStaticQuery}  from 'gatsby'
import Layout from '../../components/layout'
import ImageLink from '../../components/imageLink'
import Head from '../../components/head'
import './projectsstyle.css'

const WebDevelopment = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node{
                        frontmatter{
                            title
                            imgSrc
                            section
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    const imgSrc = require('../../img/webdev.jpeg')

    return (
        <Layout>
            <Head title='Web Development'/>
            <div className="ProjectStyle-container">
              <img className="ProjectStyle-img" src={imgSrc} />
                <div>
                <h1 className="ProjectStyle-title">Web Development:</h1>
                <p className="ProjectStyle-about">
                    I started learning web development at TRACE Camp, a coding bootcamp through Clemson University. I have explored subjects such as HTML and CSS, JavaScript, React, and Gatsby. Check out some of my projects below!
                </p>
              </div>
            </div>
            <div className='ProjectStyle-ImageLinks'>
                {data.allMarkdownRemark.edges.map((edge) => {
                    if (edge.node.frontmatter.section == 'webdevelopment') {
                        return (
                            <ImageLink imgSrc={require(`../../img/${edge.node.frontmatter.imgSrc}`)} title={edge.node.frontmatter.title} link={`/projects/${edge.node.fields.slug}`} isExternal={false} />
                        )
                    }
                })}
            </div>
        </Layout>
    )
}

export default WebDevelopment
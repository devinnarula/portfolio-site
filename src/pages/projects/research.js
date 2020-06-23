import React from 'react'
import { graphql, useStaticQuery}  from 'gatsby'
import Layout from '../../components/layout'
import ImageLink from '../../components/imageLink'
import Head from '../../components/head'
import './projectsstyle.css'

const Research = () => {
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
    const imgSrc = require('../../img/research.jpeg')

    return (
        <Layout>
            <Head title='Research'/>
            <div className="ProjectStyle-container">
              <img className="ProjectStyle-img" src={imgSrc} />
                <div className="ProjectStyle-text">
                <h1 className="ProjectStyle-title">Research:</h1>
                <p className="ProjectStyle-about">
                    I have always been fascinated by the world of research and discovery. As most of my passions are with programming and technology, the majority of my personal projects are listed on other sections of this website. However, the more formal academic research projects I have completed are listed on this page.
                </p>
              </div>
            </div>
            <div className='ProjectStyle-ImageLinks'>
                {data.allMarkdownRemark.edges.map((edge) => {
                    if (edge.node.frontmatter.section == 'research') {
                        return (
                            <ImageLink imgSrc={require(`../../img/${edge.node.frontmatter.imgSrc}`)} title={edge.node.frontmatter.title} link={`/projects/${edge.node.fields.slug}`} isExternal={false} />
                        )
                    }
                })}
            </div>
        </Layout>
    )
}

export default Research
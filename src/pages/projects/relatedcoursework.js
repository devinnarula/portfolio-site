import React from 'react'
import { graphql, useStaticQuery}  from 'gatsby'
import Layout from '../../components/layout'
import ImageLink from '../../components/imageLink'
import './projectsstyle.css'

const RelatedCoursework = () => {
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
    const imgSrc = require('../../img/coursework.jpeg')

    return (
        <Layout>
            <div className="ProjectStyle-container">
              <img className="ProjectStyle-img" src={imgSrc} />
                <div>
                <h1 className="ProjectStyle-title">Related Coursework:</h1>
                <p className="ProjectStyle-about">
                    At Clemson I try to challenge myself with a rigorous course load while pursuing my degree in computer science with a minor in mathematics. This page describes some of the work I have completed in my classes.
                </p>
              </div>
            </div>
            <div className='ProjectStyle-ImageLinks'>
                {data.allMarkdownRemark.edges.map((edge) => {
                    if (edge.node.frontmatter.section == 'relatedcoursework') {
                        return (
                            <ImageLink imgSrc={require(`../../img/${edge.node.frontmatter.imgSrc}`)} title={edge.node.frontmatter.title} link={`/projects/${edge.node.fields.slug}`} isExternal={false} />
                        )
                    }
                })}
            </div>
        </Layout>
    )
}

export default RelatedCoursework
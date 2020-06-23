import React from 'react'
import { graphql, useStaticQuery}  from 'gatsby'
import Layout from '../../components/layout'
import ImageLink from '../../components/imageLink'
import Head from '../../components/head'
import './projectsstyle.css'

const IosApplications = () => {
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
    const imgSrc = require('../../img/appstore.png')

    return (
        <Layout>
            <Head title='iOS Applications'/>
            <div className="ProjectStyle-container">
              <img className="ProjectStyle-img" src={imgSrc} />
                <div className="ProjectStyle-text">
                <h1 className="ProjectStyle-title">iOS Applications:</h1>
                <p className="ProjectStyle-about">
                    I have been teaching myself the swift programming language and iOS development though online resources and textbooks. I have mostly focused on mobile games, but I am also trying to explore other applications. I received a grant from the Clemson University Honors College to fund these projects and put my applications on the App Store.
                </p>
              </div>
            </div>
            <div className='ProjectStyle-ImageLinks'>
                {data.allMarkdownRemark.edges.map((edge) => {
                    if (edge.node.frontmatter.section == 'iosapplications') {
                        return (
                            <ImageLink imgSrc={require(`../../img/${edge.node.frontmatter.imgSrc}`)} title={edge.node.frontmatter.title} link={`/projects/${edge.node.fields.slug}`} isExternal={false} />
                        )
                    }
                })}
            </div>
        </Layout>
    )
}

export default IosApplications
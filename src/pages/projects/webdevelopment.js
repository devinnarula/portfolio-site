import React from 'react'
import { graphql, useStaticQuery}  from 'gatsby'
import Layout from '../../components/layout'
import ImageLink from '../../components/imageLink'
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
                        }
                    }
                }
            }
        }
    `)

    console.log(data)

    const imgSrc = require('../../img/Profile.jpg')
    return (
        <Layout>
            <h1>Web Development</h1>
            {/* <ol> */}
            <div className='ProjectStyle-ImageLinks'>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <ImageLink imgSrc={require(`../../img/${edge.node.frontmatter.imgSrc}`)} title={edge.node.frontmatter.title} link="https://google.com" isExternal={false} />
                    )
                })}
            </div>
            {/* </ol> */}
        </Layout>
    )
}

export default WebDevelopment
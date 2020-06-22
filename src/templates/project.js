import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import './project.css'

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            frontmatter {
                title
                imgSrc
            }
            html
        }
    }
`
const Project = (props) => {
    return (
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title}/>
            <div className="ProjectTemplate-container">
              <img className="ProjectTemplate-img" src={require(`../img/${props.data.markdownRemark.frontmatter.imgSrc}`)} />
              <div className="ProjectTemplate-desc">
              <h1 className="ProjectTemplate-title">{props.data.markdownRemark.frontmatter.title}</h1>
              <div className="ProjectTemplate-html" dangerouslySetInnerHTML = {{__html: props.data.markdownRemark.html}}></div>
              </div>
            </div>
        </Layout>
    )
}

export default Project
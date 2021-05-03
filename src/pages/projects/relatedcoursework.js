import React from 'react'
import { graphql, useStaticQuery}  from 'gatsby'
import Layout from '../../components/layout'
import ImageLink from '../../components/imageLink'
import Head from '../../components/head'
import './projectsstyle.css'
import './relatedcoursework.css'

const RelatedCoursework = () => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         allMarkdownRemark {
    //             edges {
    //                 node{
    //                     frontmatter{
    //                         title
    //                         imgSrc
    //                         section
    //                     }
    //                     fields {
    //                         slug
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `)
    const imgSrc = require('../../img/coursework.jpeg')

    return (
        <Layout>
            <Head title='Related Coursework'/>
            <div className="ProjectStyle-container">
              <img className="ProjectStyle-img" src={imgSrc} />
                <div className="ProjectStyle-text">
                <h1 className="ProjectStyle-title">Related Coursework:</h1>
                <p className="ProjectStyle-about">
                    At Clemson I try to challenge myself with a rigorous course load while pursuing my degrees in computer science and mathematics. For academic integrity reasons, I have opted to store all my coursework in private repositories, however, here is a list of my academic experience. Feel free to contact me if you wish to view or discuss my coursework for professional or academic reasons.
                </p>
              </div>
            </div>
            {/* <div className='ProjectStyle-ImageLinks'>
                {data.allMarkdownRemark.edges.map((edge) => {
                    if (edge.node.frontmatter.section == 'relatedcoursework') {
                        return (
                            <ImageLink imgSrc={require(`../../img/${edge.node.frontmatter.imgSrc}`)} title={edge.node.frontmatter.title} link={`/projects/${edge.node.fields.slug}`} isExternal={false} />
                        )
                    }
                })}
            </div> */}
            <div className="Coursework-container">
            <h1 className="Coursework-title">Computer science:</h1>
                <p className="Coursework-text">CPSC 1210: Computational Thinking </p>
                <p className="Coursework-text">CPSC 1060: Introduction to Programming in Java</p>
                <p className="Coursework-text">CPSC 1070: Programming Methodology</p>
                <p className="Coursework-text">CPSC 1900: Teaching Assistant Fundamentals</p>
                <p className="Coursework-text">CPSC 2120: Algorithms and Data Structures</p>
                <p className="Coursework-text">CPSC 2150: Software Development Foundations</p>
                <p className="Coursework-text">CPSC 2310: Introduction to Computer Organization</p>
                <p className="Coursework-text">CPSC 2910: Seminar in Professional Issues I</p>
                <p className="Coursework-text">CPSC 3600: Networks and Network Programming</p>
                <p className="Coursework-text">CPSC 3720: Introduction to Software Engineering</p>
            <h1 className="Coursework-title">Mathematics:</h1>
                <p className="Coursework-text">MATH 1060: Calculus of One Variable I</p>
                <p className="Coursework-text">MATH 1080: Calculus of One Variable II</p>
                <p className="Coursework-text">MATH 2060: Calculus of Several Variables</p>
                <p className="Coursework-text">MATH 2080: Introduction to Ordinary Differential Equations</p>
                <p className="Coursework-text">STAT 2300: Statistical Methods I</p>
                <p className="Coursework-text">MATH 3020: Statistics for Science and Engineering</p>
                <p className="Coursework-text">MATH 3110: Linear Algebra</p>
                <p className="Coursework-text">MATH 3190: Introduction to Proof</p>
                <p className="Coursework-text">MATH 4000: Theory of Probability</p>
                <p className="Coursework-text">MATH 4190: Discrete Mathematical Structures I</p>
            <h1 className="Coursework-title">General Education:</h1>
                <p className="Coursework-text">POSC 1010: American National Government</p>
                <p className="Coursework-text">ENGL 1030: Accelerated Composition</p>
                <p className="Coursework-text">ECON 2120: Principles of Macroeconomics</p>
                <p className="Coursework-text">GEOL 1010: Physical Geology</p>
                <p className="Coursework-text">COMM 1500: Introduction to Human Communication</p>
                <p className="Coursework-text">STS 1010: Survey of Science and Technology in Society</p>
                <p className="Coursework-text">REL 1020: World Religions</p>
                <p className="Coursework-text">HON 2210: Reading Rape and White Supremacy</p>
                <p className="Coursework-text">BIOL 1030: General Biology I</p>
                <p className="Coursework-text">PHYS 1220: Physics with Calculus I</p>
                <p className="Coursework-text">PHYS 1240: Physics Lab I</p>
                <p className="Coursework-text">PHYS 2070: General Physics I</p>
                <p className="Coursework-text">PHYS 2090: General Physics Lab I</p>
                <p className="Coursework-text">PHYS 2210: Physics with Calculus II</p>
                <p className="Coursework-text">PHYS 2230: Physics Lab II</p> 
                <p className="Coursework-text">SPAN 1010: Elementary Spanish</p>
                <p className="Coursework-text">SPAN 1020: Elementary Spanish</p>
                <p className="Coursework-text">SPAN 2010: Intermediate Spanish</p>
                <p className="Coursework-text">SPAN 2020: Intermediate Spanish</p>
            </div>
        </Layout>
    )
}

export default RelatedCoursework
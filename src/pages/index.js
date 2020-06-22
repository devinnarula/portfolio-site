import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import './index.css'

const Index = () => {
  const imgSrc = require('../img/Profile.jpg')
    return (
      <div className="index-animationcontainer">
         <img className="index-animationcontainerimg" src={require('../img/logo.gif')} />
      <div className="index-startcontainer">
        <Layout>
            <Head title='About Me'/>
            <div className="index-container">
              <img className="index-img" src={imgSrc} />
              <div>
                <h1 className="index-title">Hello! My name is Devin Narula.</h1>
                <h1 className="index-aboutTitle">About Me:</h1>
                <p className="index-aboutText">
                  I am currently a sophomore computer science major at Clemson University with a minor in mathematics from Charleston, SC. I have always been interested in code since I took my first computer science class in high school! It fascinates me because of how it combines my strong background in mathematics with interesting new technologies and elements of design.
                </p>
                <h1 className="index-aboutTitle">What I'm doing now:</h1>
                <p className="index-doingText">
                  I am currently trying to expand my skillset in the field of computer science by researching and experimenting with new technologies. I have become interested in web development and I'm currently reading about swift while publishing apps to the App Store! Please explore the site to see some of the projects I'm working on!
                </p>
              </div>
            </div>
            <div className="index-moreinfo">
              <div className="index-moreinfobox">
                  <h1 className="index-moreinfotitle">Languages:</h1>
                    <p className="index-moreinfotext">C/C++</p>
                    <p className="index-moreinfotext">Java</p>
                    <p className="index-moreinfotext">Swift</p>
                    <p className="index-moreinfotext">HTML/CSS</p>
                    <p className="index-moreinfotext">JavaScript</p>
              </div>
              <div className="index-moreinfobox">
                  <h1 className="index-moreinfotitle">Quick Links:</h1>  
                  <p className="index-moreinfotext">
                    <a className="index-link" href='https://www.facebook.com/devin.narula.3' target='_blank'>Facebook</a>
                  </p>
                  <p className="index-moreinfotext">
                    <a className="index-link" href='https://www.linkedin.com/in/devin-narula-463b39156/' target='_blank'>Linkedin</a>
                  </p>
                  <p className="index-moreinfotext">
                    <a className="index-link" href='https://github.com/devinnarula' target='_blank'>Github</a>
                  </p>
                  <p className="index-moreinfotext">
                    <a className="index-link" href='https://www.instagram.com/devin_narula/' target='_blank'>Instagram</a>
                  </p>
                  <p className="index-moreinfotext">
                    <a className="index-link" href='https://apps.apple.com/us/developer/devin-narula/id1515195575' target='_blank'>App Store</a>
                  </p>
                    
              </div>
              <div className="index-moreinfobox">
                  <h1 className="index-moreinfotitle">Navigation:</h1>
                    <p className="index-moreinfotext">
                      <Link className="index-link" to='/projects' onClick="document.getElementById('../img/logo.gif').src='../img/logo.gif'">Projects</Link>
                    </p>
                    <p className="index-sublink">
                      <Link className="index-link" to='/projects/webdevelopment' onClick="document.getElementById('../img/logo.gif').src='../img/logo.gif'">Web Development</Link>
                    </p>
                    <p className="index-sublink">
                      <Link className="index-link" to='/projects/iosapplications' onClick="document.getElementById('../img/logo.gif').src='../img/logo.gif'">iOS Applications</Link>
                    </p>
                    <p className="index-sublink">
                      <Link className="index-link" to='/projects/relatedcoursework' onClick="document.getElementById('../img/logo.gif').src='../img/logo.gif'">Related Coursework</Link>
                    </p>
                    <p className="index-sublink">
                      <Link className="index-link" to='/projects/research' onClick="document.getElementById('../img/logo.gif').src='../img/logo.gif'">Research</Link>
                    </p>
                    <p className="index-moreinfotext">
                      <Link className="index-link" to='/contact' onClick="document.getElementById('../img/logo.gif').src='../img/logo.gif'">Contact</Link>
                    </p>
                    <p className="index-moreinfotext">
                    <Link className="index-link" href='/resume' onClick="document.getElementById('../img/logo.gif').src='../img/logo.gif'">Resume</Link>
                    </p>
              </div>
            </div>
        </Layout>
        </div>
        </div>
    )
}

export default Index
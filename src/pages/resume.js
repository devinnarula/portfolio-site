import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head'
import './resume.css'

const Resume = () => {
    return (
        <Layout>
            <Head title='Resume'/>
            <div className='resume-container'>
                <a className='resume-title' href='https://drive.google.com/file/d/1gnTbWk2aFYIm_Yx72NZksM1M-a-pd-rL/view?usp=sharing' target='_blank'>Click Here to View PDF Version</a>
                <img className='resume-img' src={require("../img/Resume.jpg")} />
            </div>
        </Layout> 
    )
}

export default Resume
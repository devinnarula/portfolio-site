import React, {useState} from 'react';
import Layout from '../components/layout';
import ImageLink from '../components/imageLink';
import './contact.css';

const Contact = () => {
    let [subject, setSubject] = useState("")
    let [message, setMessage] = useState("")

    const handleSubjectChange = (e) => {
        setSubject(e.target.value)
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }
    const defaultProps = {
        medias: [
            {imgSrc: require('../img/facebook.png'), title: 'Devin Narula', link: 'https://www.facebook.com/devin.narula.3', isExternal: true},
            {imgSrc: require('../img/linkedin.png'), title: 'Devin Narula', link: 'https://www.linkedin.com/in/devin-narula-463b39156/', isExternal: true},
            {imgSrc: require('../img/github.png'), title: 'Devinnarula', link: 'https://github.com/devinnarula', isExternal: true},
            {imgSrc: require('../img/instagram.png'), title: 'Devin_Narula', link: 'https://www.instagram.com/devin_narula/', isExternal: true}
        ]
    }
    return (
        <Layout>
            <form className="Contact-Form">
                <caption className="Contact-Caption">Subject:</caption>
                <textarea className="Contact-Subject" value={subject} onChange={handleSubjectChange}></textarea>
                <caption className="Contact-Caption">Message:</caption>
                <textarea className="Contact-Message" value={message} onChange={handleMessageChange}></textarea>
                <a className="Contact-Button" href={`mailto:devin.j.narula@gmail.com?&subject=${subject}&body=${message}`}>Send Email</a>
            </form>
            <div className='Contact-ImageLinks'>
                {defaultProps.medias.map((m) => (
                    <ImageLink imgSrc={m.imgSrc} title={m.title} link={m.link} isExternal={m.isExternal} />
                ))}
            </div>
        </Layout> 
    )
}

export default Contact
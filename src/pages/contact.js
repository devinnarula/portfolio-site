import React, {useState} from 'react';
import Layout from '../components/layout';
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

    return (
        <Layout>
            <form className="Contact-Form">
                <caption className="Contact-Caption">Subject:</caption>
                <textarea className="Contact-Subject" value={subject} onChange={handleSubjectChange}></textarea>
                <caption className="Contact-Caption">Message:</caption>
                <textarea className="Contact-Message" value={message} onChange={handleMessageChange}></textarea>
                <a className="Contact-Button" href={`mailto:devin.j.narula@gmail.com?&subject=${subject}&body=${message}`}>Send</a>
            </form>
        </Layout> 
    )
}

export default Contact
import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import './404.css'

const NotFound = () => {
    return (
        <Layout>
            <Head title='404 Not Found'/>
            <h1 className="notfound-title">Page Not Found</h1>
            <p>
                <Link className="notfound-link" to='/'>Back to the site</Link>
            </p>
        </Layout>
    )
}

export default NotFound
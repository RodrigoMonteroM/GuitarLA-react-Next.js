import React from 'react'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'

function Layout({ children, title = "", description = "" }) {
    return (
        <>
            <Head>
                <title>{`GuitarLA - ${title}`}</title>
                <meta name='description' description={description} />
            </Head>
            <Header />
           
            {children}

            <Footer />
        </>
    )
}

export default Layout
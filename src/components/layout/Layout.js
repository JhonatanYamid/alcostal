import Head from 'next/head'
import React from 'react'
import Image from 'next/image';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = props => {
    return (
        <>
            <Head>
                <title>AlCostal</title>
                <meta name="alcostal" content="¿Quieres apoyar a los campesino de la región, además ahorrarte unos pesos? AlCostal es una forma sencilla de comprarle directamente a los agricultores de nuestra región y así conseguir los precios más justos" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;
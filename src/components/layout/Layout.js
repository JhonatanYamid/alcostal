import Head from 'next/head'
import React from 'react'
import Image from 'next/image';
import Navbar from './Navbar';
import Footer from './Footer';
import { useRouter } from 'next/router'

const Layout = props => {
    const router = useRouter();
    const paddingTop = router.pathname === '/' ? 'pt-0' : 'pt-28';
    const showFooter = router.pathname === '/products/[id]' ? 'hidden' : 'block';
    return (
        <>
            <Head>
                <title>AlCostal</title>
                <meta name="alcostal" content="¿Quieres apoyar a los campesino de la región, además ahorrarte unos pesos? AlCostal es una forma sencilla de comprarle directamente a los agricultores de nuestra región y así conseguir los precios más justos" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className={paddingTop}>
                {props.children}
            </main>
            <div className={showFooter}>
                <Footer />
            </div>

        </>
    );
}

export default Layout;
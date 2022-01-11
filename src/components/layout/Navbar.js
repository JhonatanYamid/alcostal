import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { responsiveNavbar, changeNavbackground } from '../helper';

const Navbar = () => {

    React.useEffect(() => {
        window.addEventListener('scroll', changeNavbackground);
    }, [])

    return (
        <nav className="flex items-center justify-between flex-wrap fixed inset-x-0 md:px-20 navbar-inactive px-5 z-50" id="navbar">
            <Link href="/">
                <a className="flex mr-8 pt-5" >
                    <Image
                        src="/images/logotipo.png"
                        width={65}
                        height={54}
                        alt="logotipo"
                    />
                </a>
            </Link>

            <div className="block lg:hidden">
                <button
                    id="button-menu"
                    onClick={() => responsiveNavbar()}
                    className="flex items-center px-3 py-2 border rounded">
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div
                id="menu"
                className="w-full block flex-grow lg:flex items-center lg:w-auto text-center hidden bg-teal-500 md:bg-inherit p-5 md:p-0">
                <div className="text-sm lg:flex-grow">
                    <Link href="/">
                        <a className="nav-item">
                            INICIO
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="nav-item">
                            TIENDA
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="nav-item">
                            ACERCA DE
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="nav-item">
                            AYUDA
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href="/">
                        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white bg-teal-500 border-white hover:border-transparent hover:bg-teal-400 mt-4 lg:mt-0 font-semibold">Ingresar</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { responsiveNavbar} from '../helper';

const Navbar = () => {

    // React.useEffect(() => {
    //     if (router.pathname === '/') {
    //         window.addEventListener('scroll', (router.pathname === '/') ? changeNavbackground : '');
    //     }else{
    //         document.querySelector("#navbar").classList.add("navbar-active");
    //         document.querySelector("#navbar").classList.add("py-0");
    //         console.log(router.pathname);
    //     }
    // }, [])

    return (
        <nav className="flex items-center justify-between flex-wrap fixed inset-x-0 md:px-20 navbar-active px-5 z-50 shadow-xl" id="navbar">
            <Link href="/">
                <a className="flex mr-8 pt-3" >
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
                className="w-full flex-grow lg:flex items-center lg:w-auto text-center hidden bg-teal-500 md:bg-inherit p-5 md:p-0">
                <div className="text-sm lg:flex-grow">
                    <Link href="/">
                        <a className="nav-item">
                            INICIO
                        </a>
                    </Link>
                    <Link href="/shop">
                        <a className="nav-item">
                            TIENDA
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className="nav-item">
                            ACERCA DE
                        </a>
                    </Link>
                    <Link href="/help">
                        <a className="nav-item">
                            AYUDA
                        </a>
                    </Link>
                </div>
                <div className='flex flex-row justify-center items-center text-sm text-white font-semibold'>
                    <Link href="/login">
                        <a className="px-4 mr-2 py-2 leading-none border rounded bg-teal-500 border-white hover:border-transparent hover:bg-teal-600 mt-4 lg:mt-0">Ingresar</a>
                    </Link>
                    <Link href="/">
                        <a href="#" className="text-slate-400  flex flex-row items-center px-4 py-1 leading-none border rounded bg-slate-200 border-white hover:border-transparent hover:bg-teal-600 mt-4 lg:mt-0">
                            <svg
                                className="fill-current"
                                width="22" height="22" viewBox="0 0 638.000000 743.000000"
                                preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,743.000000) scale(0.100000,-0.100000)"
                                    stroke="none">
                                    <path d="M3018 7411 c-215 -47 -362 -167 -383 -313 -4 -26 -13 -49 -20 -52 -8 -3 -33 9 -57 25 -109 77 -158 105 -223 130 -378 147 -778 7 -811 -283 -8 -71 21 -172 68 -240 30 -41 375 -421 581 -636 l79 -84 112 31 c234 63 428 90 716 98 343 9 641 -23 924 -102 l129 -35 82 87 c45 49 193 212 330 363 291 322 310 352 310 485 0 66 -5 90 -27 137 -45 97 -131 165 -263 210 -100 33 -313 33 -428 0 -93 -27 -204 -80 -272 -132 -61 -46 -88 -55 -104 -36 -7 8 -10 19 -7 24 3 5 -1 33 -10 62 -31 104 -160 203 -326 250 -107 31 -286 36 -400 11z" />
                                    <path d="M2656 5769 c-370 -99 -685 -291 -930 -568 -372 -420 -843 -1136 -1151 -1751 -668 -1335 -752 -2417 -230 -2969 207 -219 498 -355 890 -416 165 -26 573 -32 790 -11 156 15 245 15 1105 1 693 -11 988 -20 1140 -33 242 -20 659 -23 800 -4 661 87 1059 367 1224 863 119 358 114 772 -15 1299 -218 890 -803 1982 -1571 2932 -131 162 -201 224 -424 374 -159 107 -347 201 -513 253 -121 39 -221 65 -226 59 -1 -2 92 -113 208 -248 115 -135 218 -258 228 -275 23 -36 24 -76 4 -115 -22 -42 -53 -60 -107 -60 -38 0 -53 5 -77 28 -16 15 -133 150 -260 300 l-231 273 0 -166 c0 -209 -3 -217 -102 -248 -27 -9 -83 11 -109 39 -23 25 -24 32 -29 214 l-5 188 -250 -295 c-137 -162 -261 -304 -274 -314 -29 -23 -90 -25 -130 -4 -16 8 -36 31 -46 51 -30 64 -15 90 207 352 110 130 210 247 221 260 l20 22 -24 -1 c-13 0 -73 -14 -133 -30z" />
                                </g>
                            </svg>
                            <h3 className='font-bold pl-1'>0</h3>
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
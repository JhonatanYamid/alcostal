import Image from "next/image";
import Link from "next/link";

const ProductItem = ({title, description, price, category, image}) => {
    return (
        <Link href="/">
            <a href="" className="w-1/2 md:w-[22%] md:mx-3 ">
                <div className="bg-white md:rounded-xl md:shadow-xl mb-3 border-4 border-slate-100 md:border-none pb-7">
                    <div className="relative">
                        <div className="max-h-60 w-24 h-24 ">
                            <Image src={"/images/" + image} className="md:rounded-t-xl" layout="fill" objectFit="cover" alt="producto" />
                        </div>
                        <div className="bottom-0 right-0 mb-2 mr-2 px-2 rounded-lg absolute bg-yellow-500 text-gray-100 text-xs font-medium">Recomendado</div>
                    </div>
                    <div className="px-2 py-1">
                        <div className="flex flex-row items-center">
                            <div className="text-md font-bold py-2 px-3 text-gray-700">{title}</div>
                            <div className="bg-gray-200 px-2 md:ml-7 h-5 flex items-center rounded-full text-[0.5rem] font-medium text-gray-600">
                                {category}
                            </div>
                        </div>
                        <p className="pb-2 px-3 text-xs font-medium text-gray-500">{description}</p>
                        <div className="flex flex-col md:flex-row py-5">
                            <h3 className="md:pl-3 text-xl md:text-lg font-bold text-teal-500 text-center mb-4 md:mb-0">${price}</h3>
                            <div className="text-teal-500 flex flex-row items-center justify-center rounded-full shadow-lg h-7 py-7 md:py-0 px-1 mx-4">
                                <svg className="h-10 md:h-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
                                </svg>
                                <h3 className="px-1 text-lg md:text-sm font-bold text-slate-700">10</h3>
                                <svg className="h-10 md:h-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" />
                                </svg>
                            </div>
                        </div>


                        <Link href="/">
                            <a href="#" className="flex flex-row justify-center items-center mx-4 px-4 py-2 rounded-full bg-teal-500 hover:bg-teal-600 text-white">
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
                                <h3 className='font-bold text-xs md:text-sm pl-1'>Al costal</h3>
                            </a>
                        </Link>
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default ProductItem;
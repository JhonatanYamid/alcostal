import { gql } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import client from "../../../apollo-client";
import Layout from "../../components/layout/Layout";

const Product = ({ products=null }) => {
    const product = products[0];
    const price = new Intl.NumberFormat().format(product.price);
    return (
        <Layout>
            <div className="flex flex-col md:flex-row items-center h-full bg-no-repeat bg-top bg-cover bg-[url('/images/bg-section2.png')] pb-10">
                {/* Slider image */}
                <div className="flex-row-center h-1/2 w-full md:w-1/2 px-10">
                    <div className="w-full">
                        <Image src={product.imageProducts[0] ? product.imageProducts[0].url : '/images/without-image.jpg'} width={50} height={50} className="rounded-xl" layout="responsive" objectFit="cover" alt="producto" />
                    </div>
                </div>
                {/* Part Information */}
                <div className="w-full md:w-1/2 px-8 md:px-10 pt-10 md:pt-0">
                    <div className="flex-row-center">
                        {/* Information */}
                        <div className="flex-row-center">
                            <h1 className="font-bold text-4xl text-slate-700">{product.name}</h1>
                        </div>
                        {/* Star */}
                        <div className="flex w-1/5 md:w-2/12 justify-end cursor-pointer">
                            <svg className="h-8 w-8 text-teal-600 fill-transparent hover:fill-current" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                        </div>
                    </div>
                    {/* Farm */}
                    <div className="flex flex-row mt-3">
                        {/* Category */}
                        <div className="flex-row-center h-auto bg-slate-200 text-xs font-medium text-slate-500 rounded-full mr-2 px-2">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinejoin="round" strokeWidth="2" d={product.category.image.url} />
                            </svg>
                            <p className="pl-1">{product.category.name}</p>
                        </div>
                        <p className="text-xl text-slate-500">{product.farm.name}</p>
                    </div>
                    <div className="py-8">
                        <label className="tracking-normal text-slate-500 text-xs">
                            Precio kilogramo
                        </label>
                        <p className="text-4xl md:text-5xl text-teal-500 font-bold">
                            ${price}
                        </p>
                    </div>
                    <div className="flex-row-center">
                        <div className="pr-5">
                            <label className="tracking-wide text-slate-500 text-xs" htmlFor="quantity">
                                Unidad de medida
                            </label>
                            <select className="w-full bg-transparent border-b-2 pb-2 border-slate-300 text-slate-700" id="quantity">
                                <option>Selecione una opción</option>
                                <option>Kilogramo</option>
                                <option>Libra</option>
                            </select>
                        </div>
                        <div className="flex-row-center text-slate-400 rounded-full shadow-lg h-auto py-2 px-2">
                            <svg className="h-10 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
                            </svg>
                            <h3 className="px-1 text-xl font-bold text-slate-600">10</h3>
                            <svg className="h-10 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex-row-center pt-10">
                        <div className="flex flex-col items-center text-slate-500">
                            <p className="text-lg md:text-xl font-semibold">Precio total</p>
                            <p className="text-2xl md:text-3xl font-bold">$350.000</p>
                        </div>
                        <Link href="/">
                            <a className="flex-row-center px-4 md:px-7 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-white">
                                <svg
                                    className="fill-current"
                                    width="25" height="25" viewBox="0 0 638.000000 743.000000"
                                    preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,743.000000) scale(0.100000,-0.100000)"
                                        stroke="none">
                                        <path d="M3018 7411 c-215 -47 -362 -167 -383 -313 -4 -26 -13 -49 -20 -52 -8 -3 -33 9 -57 25 -109 77 -158 105 -223 130 -378 147 -778 7 -811 -283 -8 -71 21 -172 68 -240 30 -41 375 -421 581 -636 l79 -84 112 31 c234 63 428 90 716 98 343 9 641 -23 924 -102 l129 -35 82 87 c45 49 193 212 330 363 291 322 310 352 310 485 0 66 -5 90 -27 137 -45 97 -131 165 -263 210 -100 33 -313 33 -428 0 -93 -27 -204 -80 -272 -132 -61 -46 -88 -55 -104 -36 -7 8 -10 19 -7 24 3 5 -1 33 -10 62 -31 104 -160 203 -326 250 -107 31 -286 36 -400 11z" />
                                        <path d="M2656 5769 c-370 -99 -685 -291 -930 -568 -372 -420 -843 -1136 -1151 -1751 -668 -1335 -752 -2417 -230 -2969 207 -219 498 -355 890 -416 165 -26 573 -32 790 -11 156 15 245 15 1105 1 693 -11 988 -20 1140 -33 242 -20 659 -23 800 -4 661 87 1059 367 1224 863 119 358 114 772 -15 1299 -218 890 -803 1982 -1571 2932 -131 162 -201 224 -424 374 -159 107 -347 201 -513 253 -121 39 -221 65 -226 59 -1 -2 92 -113 208 -248 115 -135 218 -258 228 -275 23 -36 24 -76 4 -115 -22 -42 -53 -60 -107 -60 -38 0 -53 5 -77 28 -16 15 -133 150 -260 300 l-231 273 0 -166 c0 -209 -3 -217 -102 -248 -27 -9 -83 11 -109 39 -23 25 -24 32 -29 214 l-5 188 -250 -295 c-137 -162 -261 -304 -274 -314 -29 -23 -90 -25 -130 -4 -16 8 -36 31 -46 51 -30 64 -15 90 207 352 110 130 210 247 221 260 l20 22 -24 -1 c-13 0 -73 -14 -133 -30z" />
                                    </g>
                                </svg>
                                <h3 className='font-bold text-lg pl-2 md:pl-3 text-center'>Añadir al Costal</h3>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export async function getServerSideProps({ params }) {
    const { data: products } = await client.query({
        query: gql` 
        query products {
            products(Id:${params.id}){
                id,
                name,
                price,
                description,
                discount,
                imageProducts{
                    url
                },
                farm{
                    name
                },
                category{
                    name,
                    image {
                        url
                    }
                }
            }
        }
    `,
    });
    return {
        props: {
            products: products.products,
        },
    };
}

export default Product;
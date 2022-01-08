import Link from 'next/link';
import React from 'react'
import Lottie from "react-lottie";

const ItemCategory = ({ title, image }) => {
    var path = `/images/${image}.png`
    React.useEffect(() => {
        import("lottie-interactive/dist/lottie-interactive.js");
    }, []);
    return (
        <Link href="/">
            <a className='w-1/3 md:w-1/5 rounded-3xl bg-white m-2 shadow-lg py-5 flex justify-center'>
                <div className='w-24 text-xl hover:text-2xl'>
                    <lottie-interactive
                        path={image}
                        interaction="morph-lock"
                        speed="3"
                    />
                    <h2 className='font-semibold text-teal-600 text-center drop-shadow-lg'>{title}</h2>
                </div>

            </a>
        </Link>
    );
}

export default ItemCategory;
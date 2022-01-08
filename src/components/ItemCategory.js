import Link from 'next/link';
import React, { useState } from 'react'
import Lottie from "react-lottie";

const ItemCategory = ({ title, image }) => {
    const [autoloop, setAutoloop] = useState(false)
    React.useEffect(() => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            setAutoloop(true)
        } 
    }, [])





    var path = `/images/${image}.png`
    React.useEffect(() => {
        import("lottie-interactive/dist/lottie-interactive.js");
    }, []);
    return (
        <Link href="/">
            <a className='w-1/3 md:w-1/5 rounded-3xl bg-white m-2 shadow-lg py-5 flex justify-center'>
                <div className='w-24 text-xl hover:text-2xl'>
                    <lottie-interactive
                        autoplay={autoloop}
                        loop={autoloop}
                        path={image}
                        interaction="morph-lock"
                        speed="1.5"
                    />
                    <h2 className='font-semibold text-teal-600 text-center drop-shadow-lg'>{title}</h2>
                </div>

            </a>
        </Link>
    );
}

export default ItemCategory;
import Link from 'next/link';
import React, { useState, useEffect } from 'react'

const ItemCategory = ({ image,title }) => {
    const [autoloop, setAutoloop] = useState(false)
    useEffect(() => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            setAutoloop(true)
        }
    }, [])
    useEffect(() => {
        import("lottie-interactive/dist/lottie-interactive.js");
    }, []);
    return (
        <Link href="/">
            <a className='w-1/4 md:w-[15%] rounded-2xl bg-white shadow-lg py-4 flex justify-center'>
                <div className='w-14 md:w-20'>
                    <lottie-interactive
                        autoplay={autoloop}
                        loop={autoloop}
                        path={image}
                        interaction="morph-lock"
                        speed="1.5"
                    />
                    <h2 className='font-semibold text-teal-600 text-xs hover:text-2xl text-center drop-shadow-lg'>{title}</h2>
                </div>
            </a>
        </Link>
    );
}

export default ItemCategory;
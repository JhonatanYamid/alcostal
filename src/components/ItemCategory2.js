import React from 'react'
import Link from "next/link";

const ItemCategory2 = ({image, title}) => {
    return (
        <Link href="/">
            <a className='mx-3 w-1/4 mb-5 lg:mb-0 md:w-[13.5%] rounded-xl bg-slate-100 shadow-md p-4 flex flex-col justify-center text-sm hover:text-lg text-center'>
                <div className="flex justify-center">
                    <svg className="h-11 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={image} />
                    </svg>
                </div>
                <h2 className='font-bold'>{title} </h2>
            </a>
        </Link>
    );
}

export default ItemCategory2;
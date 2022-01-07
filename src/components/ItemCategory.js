import Link from 'next/link';
import React from 'react'

const ItemCategory = ({ title, image }) => {
    var path = `/images/${image}.png`
    return (
        <Link href="/">
            <a className='w-1/3 md:w-1/5 rounded-3xl bg-white m-2 shadow-lg py-5 flex justify-center'>
                <div className='drop-shadow-xl w-20 hover:w-24 text-xl hover:text-2xl transition'>
                    <img
                        src={path}
                        alt="category item"
                        className=''
                    />
                    <h2 className='font-semibold text-teal-600 text-center drop-shadow-lg mt-3'>{title}</h2>
                </div>

            </a>
        </Link>
    );
}

export default ItemCategory;
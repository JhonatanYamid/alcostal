import React from 'react'
import Image from "next/image"
import Link from "next/link"

const FarmItem = ({ title, description }) => {
    return (
        <Link href="/">
            <a className="w-1/2 md:w-[22%] md:mx-3 border-4 border-slate-100 md:border-none">
                <div className="relative">
                    <div className="max-h-60 w-24 h-24 ">
                        <Image src={"/images/zanahoria.jpg"} layout="fill" objectFit="cover" alt="producto"/>
                    </div>
                </div>
                <div className="px-2 py-1">
                    <div className="flex flex-row items-center">
                        <div className="text-md font-bold py-2 px-3 text-gray-700">{title}</div>
                    </div>
                    <p className="pb-2 px-3 text-xs font-medium text-gray-500">{description}</p>
                </div>
            </a>
        </Link>
    );
}

export default FarmItem;
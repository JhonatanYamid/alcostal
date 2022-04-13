import React from 'react'
import SearchInput from "../components/SearchInput";

const HeaderShop = () => {
    return (
        <div className='px-5 md:px-20'>
            <div className="text-center rounded-xl shadow-md
                bg-no-repeat bg-center bg-cover bg-[url('/images/vegetales.jpg')] md:bg-[url('/images/background-shop.jpg')]">
                <div className="bg-[rgba(6,78,59,0.7)] px-8 md:px-0 py-8 rounded-xl shadow-lg flex flex-wrap flex-col">
                    <h3
                        className='text-3xl font-bold text-white mb-5 '>
                        ¿Porque no buscamos algo?
                    </h3>
                    <div className="md:px-40">
                        <SearchInput
                            typeButton='button-success'
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HeaderShop;
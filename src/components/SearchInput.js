import React from 'react'

const SearchInput = ({ typeButton }) => {
    return (
        <div className="flex flex-col md:flex-row">
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Encuentra café, papa, yuca y más" />
            <button
                className={typeButton + ' self-center w-2/3 md:w-1/3 py-2 md:mx-2 text-xl md:text-sm'} >
                Buscar
            </button>
        </div>
    );
}

export default SearchInput;
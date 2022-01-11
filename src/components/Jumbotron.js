import Image from 'next/image';
import React from 'react'
import SearchInput from './SearchInput';

const Jumbotron = () => {

    React.useEffect(() => {
        import("lottie-interactive/dist/lottie-interactive.js");
    }, []);

    return (
        <div
            className="w-full h-screen bg-no-repeat bg-left-bottom bg-auto md:bg-contain bg-[url('/images/bg-jumbotron.png')] flex flex-wrap-reverse justify-around items-center"
        >
            <div className="w-full h-1/2 md:w-1/2 break-words px-10 md:px-20 font-bold text-teal-800">
                <h1 className=' text-4xl md:text-5xl pb-3'>¡Bienvenidos a <br />la finca!</h1>
                <p className='text-xl'>Empecemos buscando un producto fresco y recién sacadito de la tierra, aquí abajo</p>
                <SearchInput />
            </div>
            <div className='md:w-1/2 md:h-1/2 px-5 md:px-0 md:-ml-32 pt-20 md:pt-0'>
                {/* <img
                    src="/images/character-jumbotron.png"
                    alt="character-jumbotron"
                    width={500}
                    height={300}
                /> */}
                <lottie-interactive
                    autoplay
                    loop
                    path="/lottieFiles/jumbotron.json"
                />
            </div>

        </div>
    );
}

export default Jumbotron;
import React from 'react'

const Section2 = () => {

    React.useEffect(() => {
        import("lottie-interactive/dist/lottie-interactive.js");
    }, []);
    return (
        <div
            className="backgroundSection md:h-screen bg-[url('/images/bg-section2.png')]"
        >
            <div className=' md:w-1/2 md:h-1/2 px-5 md:px-0 pt-20 md:pt-0'>
                <lottie-interactive
                    autoplay
                    loop
                    path="/lottieFiles/network-alcostal.json"
                />
            </div>
            <div className="w-full md:h-1/2 md:w-1/2 break-words px-10 md:px-20 text-yellow-800 text-center md:text-left">
                <h2 className='text-xl md:text-4xl font-light '>Con cada compra</h2>
                <h3 className='text-4xl md:text-4xl font-bold'>Apoyas un agricultor de nuestra región</h3>
                <p className='text-lg font-normal pt-5'>En Colombia llevamos los últimos 50 años hablando de ruralidad, pero la desconexión entre el consumidor y el productor aún continúa</p>
                <cite className='font-thin flex justify-end'>-Ricardo Sánchez-</cite>
            </div>
        </div>
    );
}

export default Section2;
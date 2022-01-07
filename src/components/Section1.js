import React from 'react'
import ItemSection from './ItemSection';

const Section1 = () => {
    return (
            <div className="w-full flex flex-wrap items-center text-center justify-between text-cyan-600 place-content-center px-20 pt-10" >
                <ItemSection
                    title="Productos Frescos"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    image="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                <ItemSection
                    title="Ayudas al campo"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    image="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <ItemSection
                    title="Precios bajos"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    image="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </div>
    );
}

export default Section1;
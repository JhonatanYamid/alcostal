import React from 'react'
import ItemCategory from './ItemCategory';

const Section3 = () => {
    return (
        <div>
            <svg  viewBox="0 0 1440 320">
                <path fill="#14b8a6" d="M0,32L60,58.7C120,85,240,139,360,149.3C480,160,600,128,720,112C840,96,960,96,1080,106.7C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
            <div className='w-full flex flex-col bg-teal-500 md:-mt-24'>
                <div className='text-center'>
                    <h3 className='text-3xl font-light text-white'>Elige una categoría</h3>
                    <h3 className='text-3xl font-bold text-white'>Dando click sobre una opción</h3>
                </div>
                <div className='md:px-10 flex flex-row pt-5 flex-wrap justify-center pb-8 md:pb-0'>
                    <ItemCategory
                        title="Verduras"
                        image="asparagus" />
                    <ItemCategory
                        title="Verduras"
                        image="fruits" />
                    <ItemCategory
                        title="Verduras"
                        image="salad" />
                    <ItemCategory
                        title="Verduras"
                        image="tofu" />
                </div>
            </div>
            <div>
                <svg  viewBox="0 0 1440 320">
                    <path fill="#14b8a6" d="M0,32L60,58.7C120,85,240,139,360,149.3C480,160,600,128,720,112C840,96,960,96,1080,106.7C1200,117,1320,139,1380,149.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                </svg>
            </div>
        </div>

    );
}

export default Section3;
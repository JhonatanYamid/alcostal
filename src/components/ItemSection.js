import React from 'react'

const ItemSection = ({title, description, image}) => {
    return (
        <div className='section-items'>
            <div className='section-icons'>
                <svg className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={image} />
                </svg>
            </div>
            <h2 className='font-bold text-2xl'>{title}</h2>
            <h3>{description}</h3>
        </div>
    );
}

export default ItemSection;
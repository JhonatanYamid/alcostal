import React from 'react'
import FarmItem from './FarmItem';

const FarmSection = ({ titleSection, farms }) => {
  return (
    <>
      <h3
        className='text-2xl font-bold mb-5 md:ml-6 text-teal-800'>
        {titleSection}
      </h3>
      <div className='flex flex-row flex-wrap justify-center'>
        {farms.map(farm => (
                <FarmItem 
                key={farm.id}
                title = {farm.name}
                description = {farm.city.name + ' - '+ farm.address}
                  />
        ))}
      </div>
    </>
  );
}

export default FarmSection;
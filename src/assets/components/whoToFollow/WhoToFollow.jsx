import React, { useState } from 'react';
import data from '../../../data/whoToFollow.json';

const WhoToFollow = () => {
    const [followStates, setFollowStates] = useState(data.map(item => item.isFollow));

    const handleToggleFollow = (index) => {
        const updatedFollowStates = [...followStates];
        updatedFollowStates[index] = !updatedFollowStates[index];
        setFollowStates(updatedFollowStates);
    };

    return (
        <section className='hidden lg:block w-11/12 bg-grayCustom rounded-lg mt-5 py-5'>
            <h3 className='text-2xl font-bold text-customWhite px-4'>A quién seguir</h3>
            {data.map((item, index) => (
                <div key={index} className='flex justify-between hover:bg-grayHoverTendence w-full px-5 py-2 transition duration-300'>
                    <div className='flex'>
                        <figure className='w-10 h-10'>
                            <img className='w-full h-full rounded-full' src={item.urlImgProfile} alt="imgProfileFollow" />
                        </figure>
                        <div>
                            <h4 className='text-customWhite font-bold'>{item.name}</h4>
                            <span className='text-customWiteLight'>{item.nick}</span>
                        </div>
                    </div>
                    <button className='px-5 bg-customWhite text-black rounded-full h-8' onClick={() => handleToggleFollow(index)}>
                        {followStates[index] ? "Siguiendo" : "Seguir"}
                    </button>
                </div>
            ))}
        </section>
    );
};

export default WhoToFollow;

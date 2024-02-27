import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { TbSettings } from "react-icons/tb";


const HeaderProfile = () => {
    return (
        <header className='flex justify-between py-4 px-5'>
            <figure className='sm:w-12 sm:h-12'>
                <img className='w-full h-full rounded-full' src="/src/assets/img/profile/profilePrincipal.webp" alt="profilePrincipal" />
            </figure>
            <BsTwitterX fontSize={'2em'} color='white' />
            <TbSettings fontSize={'2em'} color='white' />
        </header>
    )
}

export default HeaderProfile
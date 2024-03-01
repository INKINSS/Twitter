import React from 'react'
import InputSearch from '../../components/inputSearch/InputSearch'
import Suscribe from '../../components/suscribe/Suscribe'

const SideBar = () => {
    return (
        <article className=' hidden lg:block lg:w-1/3 bg-black pl-5 border-l-2 border-gray-800'>
            <InputSearch />
            <Suscribe />
        </article>
    )
}

export default SideBar
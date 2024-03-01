import React from 'react'
import InputSearch from '../../components/inputSearch/InputSearch'
import Suscribe from '../../components/suscribe/Suscribe'
import Tendence from '../../components/tendence/Tendence'

const SideBar = () => {
    return (
        <article className=' hidden lg:block lg:w-1/3 bg-black pl-5 border-l-2 border-gray-800'>
            <InputSearch />
            <Suscribe />
            <Tendence />
        </article>
    )
}

export default SideBar
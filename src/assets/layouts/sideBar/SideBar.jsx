import React from 'react'
import InputSearch from '../../components/inputSearch/InputSearch'

const SideBar = () => {
    return (
        <article className=' hidden lg:block lg:w-1/3 bg-black pl-5 border-l-2 border-gray-800'>
            <InputSearch />
        </article>
    )
}

export default SideBar
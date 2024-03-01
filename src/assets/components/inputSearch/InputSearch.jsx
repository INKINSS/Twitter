import React from 'react'
import { IoSearch } from "react-icons/io5";

const InputSearch = () => {
    return (
        <section className=' bg-grayCustom flex w-11/12 mt-2  py-3 pl-5 items-center rounded-full'>
            <IoSearch className='text-customWiteLight' />
            <input className='block w-[85%] bg-grayCustom text-white pl-3 outline-none' type="text" placeholder='buscar' />
        </section>
    )
}

export default InputSearch
import React from 'react';
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RiEmotionHappyLine } from "react-icons/ri";
import { TbCalendarStats } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Publication = () => {
    return (
        <section className='hidden lg:flex py-5 w-full border-b-2 border-gray-800'>
            <figure className='w-10 h-10'>
                <img className='w-full h-full rounded-full' src="/public/img/profile/profilePrincipal.webp" alt="imgPrincipal" />
            </figure>
            <div className='flex flex-grow'>
                <div className='flex flex-col w-full'>
                    <div>
                        <input className='w-full bg-black text-xl pl-4 outline-none text-gray-400' type="text" placeholder='¡¿Qué está pasando!?' />
                    </div>
                    <div className='flex pt-2 items-center justify-between w-full px-5'>
                        <div className='flex gap-2'>
                            <CiImageOn className='text-blue-500' />
                            <MdOutlineGifBox className='text-blue-500' />
                            <AiOutlineQuestionCircle className='text-blue-500' />
                            <RiEmotionHappyLine className='text-blue-500' />
                            <TbCalendarStats className='text-blue-500' />
                            <HiOutlineLocationMarker className='text-blue-500' />
                        </div>
                        <button className='bg-blue-500 text-customWhite font-medium rounded-full px-7 py-2'>Postear</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Publication;

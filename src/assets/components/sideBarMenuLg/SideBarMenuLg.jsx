import React from 'react';
import { BsTwitterX } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { RiFileListLine } from "react-icons/ri";
import { LuUsers } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { HiOutlineEllipsisHorizontalCircle } from "react-icons/hi2";
import { GoKebabHorizontal } from "react-icons/go";

const SideBarMenuLg = () => {
    const optionMenu = [
        {
            "iconMenu": <BsTwitterX />,
            "title": ""
        },
        {
            "iconMenu": <GoHomeFill />,
            "title": "Inicio"
        },
        {
            "iconMenu": <IoSearch />,
            "title": "Explorar"
        },
        {
            "iconMenu": <IoMdNotificationsOutline />,
            "title": "Notificaciones"
        },
        {
            "iconMenu": <MdOutlineEmail />,
            "title": "Mensajes"
        },
        {
            "iconMenu": <RiFileListLine />,
            "title": "Listas"
        },
        {
            "iconMenu": <LuUsers />,
            "title": "Comunidades"
        },
        {
            "iconMenu": <CiUser />,
            "title": "Perfil"
        },
        {
            "iconMenu": <HiOutlineEllipsisHorizontalCircle />,
            "title": "Más opciones"
        }
    ];

    return (
        <section className='hidden lg:w-[23%] lg:block lg:border-r-2 border-gray-800 bg-black px-5 h-screen sticky top-0'>
            <div className="flex flex-col h-full">
                <div className='pb-2'>
                    {optionMenu.map((item, index) => (
                        <div className='flex text-customWhite items-center py-3 text-xl hover:bg-gray-700 rounded-full px-4' key={index}>
                            {item.iconMenu}
                            <span className='font-bold pl-4'>{item.title}</span>
                        </div>
                    ))}
                </div>
                <div>
                    <button className='w-[90%] rounded-full bg-blue-500 text-customWhite text-base py-2 px-16 font-medium'>Postear</button>
                    <div className='flex justify-between items-center w-full pt-5 px-5'>
                        <figure className='w-8 h-8'>
                            <img className='w-full h-full rounded-full' src="/src/assets/img/profile/profilePrincipal.webp" alt="imgProfilePrincipal" />
                        </figure>
                        <div className='flex-col'>
                            <h2 className='text-customWhite font-medium text-sm pt-3'>Elizabeth Cheverria</h2>
                            <span className='text-gray-500 text-sm'>@ElCheve_ria</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SideBarMenuLg;

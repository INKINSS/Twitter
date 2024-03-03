import React, { useState } from 'react';
import { IoAddCircleOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { RiFileListLine } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { RiUserReceived2Line } from "react-icons/ri";
import { PiMoneyBold } from "react-icons/pi";
import { LuArrowUpRightSquare } from "react-icons/lu";
import { TbSettings } from "react-icons/tb";
import { BsBoxArrowInRight } from "react-icons/bs";

const SideBarMenu = () => {

    const optionMenu = [
        {
            "iconMenu" : <CiUser />,
            "title" : "Perfil"
        },
        {
            "iconMenu" : <BsTwitterX />,
            "title" : "Premium"
        },
        {
            "iconMenu" : <RiFileListLine />,
            "title" : "Listas"
        },
        {
            "iconMenu" : <FaRegBookmark />,
            "title" : "Guardados"
        },
        {
            "iconMenu" : <LuUsers />,
            "title" : "Comunidades"
        },
        {
            "iconMenu" : <RiUserReceived2Line />,
            "title" : "Solicitudes de seguimiendo"
        },
        {
            "iconMenu" : <PiMoneyBold />,
            "title" : "Monetización"
        },
        {
            "iconMenu" : <LuArrowUpRightSquare />,
            "title" : "Anuncios"
        },
        {
            "iconMenu" : <TbSettings />,
            "title" : "Configuración y privacidad"
        },
        {
            "iconMenu" : <BsBoxArrowInRight />,
            "title": "Cerrar sesión"
        }
    ];

    return (
        <section className='fixed w-full h-full bg-black top-0 left-0 p-5 overflow-y-auto z-10'>
            <section>
                <div className='flex justify-between w-full'>
                    <figure className='w-8 h-8'>
<<<<<<< HEAD
                        <img className='w-full h-full rounded-full' src="/img/profile/profilePrincipal.webp" alt="imgProfilePrincipal" />
=======
                        <img className='w-full h-full rounded-full' src="/public/img/profile/profilePrincipal.webp" alt="imgProfilePrincipal" />
>>>>>>> 55eeccde4d91944612b36ed03d75ee2f83374c07
                    </figure>
                    <IoAddCircleOutline color='white' size={'1.7em'} />
                </div>
                <h2 className='text-customWhite font-medium text-xl pt-3'>Samuel Perez</h2>
                <span className='text-gray-500'>@Zs198_</span>
                <div className='flex gap-5 pt-5'>
                    <p className='text-gray-500 text-ssm pl-2'><span className='text-customWhite font-medium pr-1 text-sm'>234</span>Siguiendo</p>
                    <p className='text-gray-500 text-ssm'><span className='text-customWhite font-medium pr-1 text-sm'>5354</span>Seguidores</p>
                </div>
            </section>
            <section className='pt-4'>
                { optionMenu.map((item,index) => (
                    <div className='flex text-customWhite items-center py-3 text-xl hover:bg-gray-700' key={index}>
                        {item.iconMenu}
                        <span className='font-bold pl-4'>{item.title}</span>
                    </div>
                )) }
            </section>
        </section>
    )
}

export default SideBarMenu;

import React, {useState, useEffect} from 'react'
import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import FloatButtonEdit from '../floatButtonEdit/FloatButtonEdit';

const FooterMenu = () => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    };
    useEffect(() => {

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    window.addEventListener('scroll', handleScroll);


    return (
        <footer className={`flex fixed bottom-0 py-5 border-t-2 border-gray-800 bg-black w-full justify-between text-customWhite px-12 transition-all duration-500 ${!visible ? 'transform translate-y-full' : 'transform translate-y-0'}`}
        >
            <FloatButtonEdit />
            <GoHomeFill size={'2em'} />
            <FaSearch size={'2em'} />
            <HiOutlineUsers size={'2em'} />
            <IoMdNotificationsOutline size={'2em'} />
            <MdOutlineEmail size={'2em'} />
        </footer>
    )
}

export default FooterMenu
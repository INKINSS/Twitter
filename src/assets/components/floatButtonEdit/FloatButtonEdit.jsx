import React, { useState, useEffect } from 'react'
import { FaFeatherAlt } from "react-icons/fa";

const FloatButtonEdit = () => {

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
        <figure  className={`bg-blue-500 rounded-full flex items-center justify-center fixed bottom-24 right-10 w-16 h-16 text-customWhite transition-all duration-500 ${
            visible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full opacity-0'
        }`}>
            <FaFeatherAlt size={'1.5em'} color='white' />
        </figure>
    )
}

export default FloatButtonEdit
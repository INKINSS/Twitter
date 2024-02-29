import React from 'react'
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button } from '@chakra-ui/react'
import { BsTwitterX } from "react-icons/bs";
import { TbSettings } from "react-icons/tb";
import SideBarMenu from '../sideBarMenu/SideBarMenu';


const HeaderProfile = () => {

    const [size, setSize] = React.useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }

    const sizes = ['sm']

    return (
        <>
            {sizes.map((size,index) => (
                <header key={index} className='flex justify-between p-5'>
                    <figure
                        className='w-12 h-12'
                        placement='left'
                        onClick={() => handleClick(size)}
                        key={size}
                        m={4}
                    ><img className='w-full h-full rounded-full' src="/src/assets/img/profile/profilePrincipal.webp" alt="imgProfile" />
                    </figure>
                    <BsTwitterX size={'2em'} color='white' />
                    <TbSettings size={'2em'} color='white' />
                </header>

            ))}

            <Drawer onClose={onClose} isOpen={isOpen} size={size} placement='left'>
                <DrawerOverlay />
                <DrawerContent>
                    <SideBarMenu />
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default HeaderProfile
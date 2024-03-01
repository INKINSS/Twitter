import React from 'react';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, useMediaQuery } from '@chakra-ui/react';
import { BsTwitterX } from "react-icons/bs";
import { TbSettings } from "react-icons/tb";
import SideBarMenu from '../sideBarMenu/SideBarMenu';

const HeaderProfile = () => {
    const [size, setSize] = React.useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLargerThanIpad] = useMediaQuery("(min-width: 768px)");

    const handleClick = () => {
        setSize(isLargerThanIpad ? '320px' : '260px');
        onOpen();
    };

    return (
        <>
            <header className='flex justify-between p-5 lg:hidden'>
                <figure
                    className='w-8 h-8'
                    onClick={handleClick}
                    m={4}
                >
                    <img className='w-full h-full rounded-full' src="/src/assets/img/profile/profilePrincipal.webp" alt="imgProfile" />
                </figure>
                <BsTwitterX size={'1.5em'} color='white' />
                <TbSettings size={'1.5em'} color='white' />
            </header>

            <Drawer onClose={onClose} isOpen={isOpen} size={size} placement='left'>
                <DrawerOverlay />
                <DrawerContent maxW={size}>
                    <DrawerHeader>Título del Drawer</DrawerHeader>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <SideBarMenu />
                    </DrawerBody>
                    <DrawerFooter>
                        <Button onClick={onClose}>Cerrar</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default HeaderProfile;

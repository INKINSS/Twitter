import React from 'react';
import SideBarMenuLg from '../../components/sideBarMenuLg/SideBarMenuLg';
import Header from '../../layouts/header/Header';
import FooterMenu from '../../components/footerMenu/FooterMenu';

const Principal = () => {
    return (
        <main className='flex'>
            <SideBarMenuLg />
            <Header />
            <FooterMenu />
        </main>
    );
};

export default Principal;

import React from 'react';
import SideBarMenuLg from '../../components/sideBarMenuLg/SideBarMenuLg';
import Header from '../../layouts/header/Header';
import FooterMenu from '../../components/footerMenu/FooterMenu';
import SideBar from '../../layouts/sideBar/SideBar';

const Principal = () => {
    return (
        <main className='flex'>
            <SideBarMenuLg />
            <Header />
            <SideBar />
            <FooterMenu />
        </main>
    );
};

export default Principal;

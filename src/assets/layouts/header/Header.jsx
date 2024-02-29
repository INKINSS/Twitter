import React from 'react'
import HeaderProfile from '../../components/headerProfile/HeaderProfile'
import HeaderFollow from '../../components/headerFollow/HeaderFollow'

const Header = () => {

    return (
        <section className=' bg-black'>
            <HeaderProfile />
            <HeaderFollow />
        </section>
    )
}

export default Header
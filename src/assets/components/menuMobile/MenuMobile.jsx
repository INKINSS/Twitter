import { GoHomeFill } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";
import { RiNotification4Line } from "react-icons/ri";
import { SlEnvolope } from "react-icons/sl";
import './MenuMobile.scss'

const MenuMobile = () => {
    return (
        <section className="menuMobile">
            <GoHomeFill className="iconMenuMobile" />
            <IoSearchSharp className="iconMenuMobile" />
            <RiNotification4Line className="iconMenuMobile"/>
            <SlEnvolope className="iconMenuMobile"/>
        </section>
    )
}

export default MenuMobile

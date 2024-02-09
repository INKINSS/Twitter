import { BsTwitterX } from "react-icons/bs";
import { TbSettings } from "react-icons/tb";

import './Header.scss'
import Follow from "../follow/Follow";

const Header = () => {

    const imgProfile = '/src/assets/img/profile.webp'

    return (
        <section>
            <div className="header">
                <figure className='figureProfile'>
                    <img className='imgProfile' src={ imgProfile } alt="imgProfile" />
                </figure>
                <BsTwitterX className="iconHeader" />
                <TbSettings className="iconHeader" />
            </div>
            <Follow />
        </section>
    )
}

export default Header

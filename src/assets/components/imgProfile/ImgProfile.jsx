import user from '../../../data/User.json'
import './ImgProfile.scss'

const ImgProfile = () => {

    return (
        <section>
            { user.map( ( item, index ) => (
                <figure className='figureImg' key={index}>
                    <img className='imgProfile' src={ item.profileImage.url } alt="profileImage" />
                </figure>
            )) }
        </section>
    );
};

export default ImgProfile;
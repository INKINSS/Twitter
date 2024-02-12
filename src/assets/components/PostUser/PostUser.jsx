import { TbPointFilled } from "react-icons/tb";
import { GoKebabHorizontal } from "react-icons/go";
import user from '../../../data/User.json'
import './PostUser.scss'
import InteractivePost from "../interactivePost/InteractivePost";

const PostUser = () => {
    return (
        <main>
            {user.map((item, index) => (
                <div key={index} className="post">
                    <div className='containerPost'>
                        <figure className='figureImgPost'>
                            <img className='imgProfilePost' src={item.profileImage.url} alt="profileImage" />
                        </figure>
                        <section className='bodyPost'>
                            <div className='infoUser'>
                                <div className="headerInfo">
                                    <h3 className='userName'>{item.username}</h3>
                                    <h4 className='userNick'>{item.nick}</h4>
                                    <TbPointFilled className="pointDivider" />
                                    <h4 className='publicationTime'>{item.publicationTime}</h4>
                                </div>
                                <GoKebabHorizontal className="kebabPoint" />
                            </div>
                            <p className="comment">{item.comment}</p>
                            <figure className='figurePostUser'>
                                <img className='imgPost' src={item.imageUrl} alt="imagePost" />
                            </figure>
                    <InteractivePost />
                        </section>
                    </div>
                </div>

            ))}
        </main>
    )
}

export default PostUser

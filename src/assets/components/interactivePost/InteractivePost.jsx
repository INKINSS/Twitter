import { FaRegComment } from "react-icons/fa"
import { HiArrowPathRoundedSquare } from "react-icons/hi2"
import { FaRegHeart } from "react-icons/fa"
import { HiArrowUpTray } from "react-icons/hi2"
import { ImParagraphLeft } from "react-icons/im"
import { BiBookmark } from "react-icons/bi"
import './InteractivePost.scss'

const InteractivePost = () => {

    const getNumberComments = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const getNumberRettwet = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const getNumberHeart = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const getNumberGraph = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;


    return (
        <section className="interactivePost">
            <div className="groupIcons">
                <div>
                    <FaRegComment className="iconInteractivePost" />
                    <span className="number">{getNumberComments()}</span>
                </div>
                <div>
                    <HiArrowPathRoundedSquare className="iconInteractivePost" />
                    <span className="number">{getNumberRettwet()}</span>
                </div>
                <div>
                    <FaRegHeart className="iconInteractivePost" />
                    <span className="number">{getNumberHeart()}</span>
                </div>
                <div>
                    <ImParagraphLeft style={{rotate: ('-90deg')}} className="iconInteractivePost" />
                    <span className="number">{getNumberGraph()}</span>
                </div>
            </div>
            <div className="saveAndShare">
                <BiBookmark className="iconInteractivePost" />
                <HiArrowUpTray className="iconInteractivePost" />
            </div>
        </section>
    )
}

export default InteractivePost

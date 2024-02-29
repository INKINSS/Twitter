import React from 'react'
import { TbMessageCircle } from "react-icons/tb";
import { AiOutlineRetweet } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { ImParagraphLeft } from "react-icons/im";
import { FaRegBookmark } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { VscKebabVertical } from "react-icons/vsc";
import data from '../../../data/data.json'

const Posted = () => {

    return (
        <article>
            {data.map((item, index) => (
                <article key={index}>
                    <section className='flex gap-5 pb-8 pt-8 border-b border-gray-800' key={index}>
                        <figure className='w-16 h-16'>
                            <img className='w-full h-full rounded-full' src={item.UrlImgUser} alt="imgUser" />
                        </figure>
                        <div className='sm:w-4/5 lg:w-3/5'>
                            <header className='flex items-center gap-1 relative'>
                                <h3 className='font-bold text-xl text-customWhite'>{item.name}</h3>
                                <span className='text-gray-400 text-xl font-normal'>{item.nick}</span>
                                <span className='text-gray-400 pl-1 text-xl'>{item.infoPost.timepost}</span>
                                <VscKebabVertical className='text-gray-400 absolute right-0' />
                            </header>
                            <p className='text-customWhite text-xl pb-5 pt-2'>{item.infoPost.comment}</p>
                            <figure className='w-full h-auto'>
                                <img className='w-full h-full rounded-xl' src={item.infoPost.urlPost} alt="imgPost" />
                            </figure>
                            <footer className='pt-2'>
                                <section className='flex w-full justify-between px-5 pt-3 text-gray-400'>
                                    <div className='flex items-center gap-1'>
                                        <TbMessageCircle size={'1.5em'} />
                                        <span>{item.infoPost.numberComments}</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <AiOutlineRetweet size={'1.5em'} />
                                        <span>{item.infoPost.numberShares}</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <FaRegHeart size={'1.5em'} />
                                        <span>{item.infoPost.numberLikes}</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <ImParagraphLeft className='transform -rotate-90' />
                                        <span>{item.infoPost.numberView}</span>
                                    </div>
                                    <div>
                                        <FaRegBookmark size={'1.5em'} />
                                    </div>
                                    <div>
                                        <IoShareSocialOutline size={'1.5em'} />
                                    </div>
                                </section>
                            </footer>
                        </div>
                    </section>
                </article>

            ))}
        </article>
    )
}

export default Posted
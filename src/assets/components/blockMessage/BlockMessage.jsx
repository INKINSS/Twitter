import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";


const BlockMessage = () => {
    return (
        <section className=' hidden lg:block justify-between rounded-lg items-center font-bold px-3 border-t-2 border-r-2 border-l-2 fixed pb-5 bottom-0 bg-black w-[23%] pt-3 translate-y-2 border-white'>
            <div className='flex items-center justify-between'>
                <h3 className='text-customWhite text-xl'>Mensajes</h3>
                <div className='flex gap-2 items-center'>
                    <MdOutlineMarkEmailUnread color='white' size={'1.5em'} />
                    <MdOutlineKeyboardDoubleArrowUp color='white' size={'1.5em'} />
                </div>
            </div>

        </section>

    )
}

export default BlockMessage
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Posted from '../posted/Posted'
import PostedForYou from '../postedForYou/PostedForYou'
import { TbSettings } from "react-icons/tb";


const HeaderFollow = () => {
    return (
        <section>
            <Tabs>
                <TabList className='lg:w-[95%] sm:w-full items-center' justifyContent={'center'}>
                    <Tab className='focus:text-blue-500 sm:w-1/2 lg:w-[45%]' color={'gray.50'} fontFamily={'Roboto'} fontWeight={'500'}  px={'4em'} py={'1em'}>Para Ti</Tab>
                    <Tab className='focus:text-blue-500 sm:w-1/2 lg:w-[45%]' color={'gray.50'} fontFamily={'Roboto'} fontWeight={'500'}  px={'4em'} py={'1em'}>Siguiendo</Tab>
                    <TbSettings className='hidden lg:block text-white pr-5' size={'3em'} />
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Posted />
                    </TabPanel>
                    <TabPanel>
                        <PostedForYou />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </section>
    )
}

export default HeaderFollow
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Posted from '../posted/Posted'

const HeaderFollow = () => {
    return (
        <section>
            <Tabs>
                <TabList className='lg:w-7/12 sm:w-full' justifyContent={'center'}>
                    <Tab className='focus:text-blue-500 sm:w-1/2 lg:w-[40%]' color={'gray.50'} fontFamily={'Roboto'} fontWeight={'500'}  px={'4em'} py={'1em'}>Para Ti</Tab>
                    <Tab className='focus:text-blue-500 sm:w-1/2 lg:w-[40%]' color={'gray.50'} fontFamily={'Roboto'} fontWeight={'500'}  px={'4em'} py={'1em'}>Siguiendo</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Posted />
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </section>
    )
}

export default HeaderFollow
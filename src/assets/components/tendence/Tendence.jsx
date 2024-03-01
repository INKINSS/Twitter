import React from 'react'
import { Card, CardHeader, CardBody, Heading, Stack, Box, Text, StackDivider } from '@chakra-ui/react'
import data from '../../../data/tendence.json'
import { GoKebabHorizontal } from "react-icons/go";

const Tendence = () => {
    return (
        <article className='hidden lg:block mt-4 w-11/12' >
            <Card bgColor={'rgb(22, 24, 28)'} paddingBottom={'1em'}>
                <CardHeader paddingBottom={'0'}>
                    <Heading size='md' color={'#ffffff'}>Tendencias para Ti</Heading>
                </CardHeader>
                {data.map((item, index) => (
                    <CardBody key={index} paddingBottom={'0'} transitionDuration={'.5s'} _hover={{backgroundColor:'#303030'}} >
                        <Stack divider={<StackDivider />} spacing='2'>
                            <Box>
                                <Heading display={'flex'} justifyContent={'space-between'} fontSize={'.9em'} fontWeight={'200'} color={'#ccc'} size='xs'>
                                    <p>{ item.type }  Tendencia</p>
                                    <GoKebabHorizontal />
                                </Heading>
                                <Text fontSize='sm'>
                                    <h2 className='text-customWhite font-bold text-lg'>{ item.user }</h2>
                                    <p className='text-customWhite'>{ item.postNumber } Post</p>
                                </Text>
                            </Box>
                        </Stack>
                    </CardBody>
                ))}
            </Card>
        </article>
    )
}

export default Tendence
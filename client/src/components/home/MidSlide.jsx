import React from 'react'
import Slide from './Slide'
import { Box, styled } from '@mui/material'

const Component = styled(Box)`
    display:flex;
`
const LeftComponent = styled(Box)(({ theme }) => ({
    width: '83%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))

const RightComponent = styled(Box)(({ theme }) => ({
    background: '#FFFFFF',
    padding: 5,
    marginTop: 10,
    marginLeft: 9,
    width: '17%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))


const MidSlide = ({ products }) => {

    const adURL = "https://rukminim1.flixcart.com/fk-p-flap/530/810/image/bc5ca8677d96765c.jpg?q=20";
    return (
        <Component>
            <LeftComponent>
                <Slide products={products}></Slide>
            </LeftComponent>
            <RightComponent>
                <img src={adURL} alt='ad' style={{ width: 217 }} />
            </RightComponent>
        </Component>
    )
}

export default MidSlide
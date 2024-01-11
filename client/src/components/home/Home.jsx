import React from 'react'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { useDispatch, useSelector } from 'react-redux'
import { Box, styled } from '@mui/material'
import { getProducts } from '../redux/actions/productAction'
import MidSlide from './MidSlide'
import MidSection from './MidSection'
import Slide from './Slide'

const Component = styled(Box)`
    padding:10px;
    background:#F2F2F2;
`

const Home = () => {

    const { products } = useSelector(state => state.getProducts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <>
            <Navbar />
            <Component>
                <Banner />
                <MidSlide products={products} />
                <MidSection />
                <Slide products={products} />
            </Component>
        </>
    )
}

export default Home
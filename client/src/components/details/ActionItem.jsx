import { Box, Button, styled } from '@mui/material'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartAction';
import { payUsingPaytm } from '../../service/api';
import axios from 'axios';
// import Razorpay from 'razorpay';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    // marginRight: '15px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}));

const Image = styled('img')({
    width: '95%',
    padding: '15px',
    // border: '1px solid #f0f0f0',
})

const StyledButton = styled(Button)(({ theme }) => ({
    width: '48%',
    height: 50,
    borderRadius: 2,
    [theme.breakpoints.down('lg')]: {
        width: '46%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '48%',
    }
}))


const ActionItem = ({ product }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);

    const { id } = product;

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    const buyNow = async (amount) => {

        const key = await axios.get('http://localhost:8000/getkey');
        // console.log("Key");
        // console.log(key.data.key);
        const response = await payUsingPaytm({ amount: amount });
        // console.log("Resonse =");
        // console.log(response);
        // console.log(window);

        const options = {
            key: key.data.key, // Enter the Key ID generated from the Dashboard
            amount: response.amount,
            currency: "INR",
            name: "Dhruv Panchal",
            description: "Razorpay Integration",
            image: "https://avatars.githubusercontent.com/u/25058652?v=4",
            order_id: response.id,
            callback_url: 'http://localhost:8000/paymentverification',
            prefill: {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "6355612098"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#3399cc"
            }
        };

        // console.log(options);
        const razor = new window.Razorpay(options);
        razor.open();
    }

    return (
        <LeftContainer>
            <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0', marginBottom: 10 }}>
                <Image src={product.detailUrl} alt='product' />
            </Box>
            <StyledButton variant='contained' onClick={() => addItemToCart()} style={{ marginRight: 10, background: '#ff9f00' }}><ShoppingCartIcon />Add to Cart</StyledButton>
            <StyledButton variant='contained' style={{ background: '#fb541b' }} onClick={() => buyNow(product.price.cost)}><FlashOnIcon />Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem
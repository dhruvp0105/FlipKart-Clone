import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Component = styled(Box)`
    text-align:center;
    padding-top:30px;
`

const OrderWrapper = styled(Box)`
    margin-top:20px;
`
const NoteWrapper = styled(Box)`
    margin-top:15px;
`

const Image = styled('img')((({ theme }) => ({
    Width: 20,
    [theme.breakpoints.down('md')]: {
        Width: 25
    }
})))

const Text = styled(Typography)`
    font-family: cursive;
    font-size:18px;
`

const SuccessPayment = () => {

    const searchQuery = useSearchParams()[0];
    console.log(searchQuery);

    const referenceNum = searchQuery.get('reference');
    return (
        <Box>
            <Component>
                <Image src='https://www.delaneystudios.com.au/uploads/1/1/8/3/118392473/payment-successful_orig.png' alt='payment' />
                <OrderWrapper>
                    <Typography style={{ fontSize: 20, fontWeight: 600 }}>Your Transaction ID : <span style={{ color: 'red' }}>{referenceNum}</span></Typography>
                    <Typography style={{ color: '#454545' }}>Please keep this transaction number for your records</Typography>
                </OrderWrapper>

                <NoteWrapper>
                    <Text>You will receive a confirmation email with your transaction number along with information on how to track your order once it has been shipped.</Text>
                </NoteWrapper>

            </Component>


        </Box>

    )
}

export default SuccessPayment
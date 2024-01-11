import { Box, Table, TableBody, TableCell, TableRow, Typography, styled } from '@mui/material'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import React from 'react'

const SmallText = styled(Box)`
    vertical-align:baseline;
    font-size:14px;
    & > p{
        font-size:14px;
        margin-top:10px;
    }
`
const StyledBadge = styled(LocalOfferIcon)`
    margin-right:10px;
    color:#00CC00;
    font-size:15px;
`
const ColumnText = styled(TableRow)`
    vertical-align:baseline;
    font-size:14px;
    & > td {
        border:none;
        font-size:14px;
        margin-top:10px;
    }
`

const ProductDetail = ({ product }) => {

    const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    return (
        <>
            <Typography style={{ fontWeight: 600 }}>Available Offers</Typography>
            <SmallText>
                <Typography><StyledBadge />Bank Offer5% Cashback on Flipkart Axis Bank Card T&C</Typography>
                <Typography><StyledBadge />Special PriceGet extra 16% off (price inclusive of cashback/coupon) T&C</Typography>
                <Typography><StyledBadge />Combo Offer Extra 10% Off on Trimmers T&C</Typography>
                <Typography><StyledBadge />Extra 5% off on Gaming Chairs T&C</Typography>
                <Typography><StyledBadge />Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000*</Typography>
                <Typography><StyledBadge />Partner OfferPurchase now & get 1 surprise cashback coupon in Future</Typography>
                <Typography><StyledBadge />Extra 5% off on Office Tables</Typography>
            </SmallText>

            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>

                    <ColumnText>
                        <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>

                    <ColumnText>
                        <TableCell style={{ color: "#878787" }}>Seller</TableCell>
                        <TableCell >
                            <Box component="span" style={{ color: '#2874f0' }}>RetailNet</Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>7 Days Service Center Replacement/Repair</Typography>
                        </TableCell>
                    </ColumnText>

                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} alt='img' style={{ width: 390 }} />
                        </TableCell>
                    </ColumnText>

                    <ColumnText>
                        <TableCell style={{ color: "#878787" }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>

                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail
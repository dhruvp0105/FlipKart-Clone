import { Box, InputBase, List, ListItem, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productAction';
import { NavLink } from 'react-router-dom';

const SearchContainer = styled(Box)`
    background:#fff;
    width:34%;
    border-radius:2px;
    margin-left:10px;
    display:flex
`
const InputSearchBase = styled(InputBase)`
    width:100%;
    padding-left:20px
`
const SearchIconWrapper = styled(Box)`
    color:blue;
    padding:5px;
`
const ListWrapper = styled(List)`
    position:absolute;
    background:#FFFFFF;
    color:#000;
    margin-top:40px;
`

const Search = () => {

    const [text, setText] = useState('');

    const { products } = useSelector(state => state.getProducts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    const getText = (text) => {
        setText(text);
    }
    return (
        <>
            <SearchContainer>
                <InputSearchBase placeholder='Search for products,brands and more'
                    onChange={(e) => getText(e.target.value)}
                    value={text}
                />
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                {
                    text &&
                    <ListWrapper>
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                <ListItem>
                                    <NavLink to={`/product/${product.id}`} onClick={() => setText('')}
                                        style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {product.title.longTitle}
                                    </NavLink>
                                </ListItem>
                            ))
                        }
                    </ListWrapper>
                }
            </SearchContainer>
        </>
    )
}

export default Search
import { Box, Menu, MenuItem, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)`
    margin-top:1px;
`
const Logout = styled(Typography)`
    font-size:14px;
    margin-left:20px;
`

const Profile = ({ account, setAccount }) => {

    const [open, setOpen] = useState(null);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const handleClose = () => {
        setOpen(null);
    }

    const logout = () => {
        setAccount('');
    }

    return (
        <>
            <Box onClick={handleClick}>
                <Typography style={{ marginTop: 2, cursor: 'pointer' }}>{account}</Typography>
                <Component
                    anchorEl={open}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={() => { handleClose(); logout(); }}>
                        <PowerSettingsNewIcon color='primary' fontSize='small' />
                        <Logout>Logout</Logout>
                    </MenuItem>
                </Component>
            </Box>
        </>
    )
}

export default Profile
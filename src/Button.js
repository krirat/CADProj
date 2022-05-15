import React from 'react';
import MUIButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const types = {
    small : 'small'
}

const Button = styled(MUIButton)(() => ({
    color: '#F6F6F6',
    backgroundColor: '#48695C',
    fontFamily: 'Montserrat',
    paddingLeft: '50px',
    paddingRight: '50px',
    '&:hover' : {
        backgroundColor: '#3B574C'
    }
}));
function styledButton(props) {
    return (<Button variant="contained" size="large" disableRipple>{props.text}</Button>)
}

export default styledButton;
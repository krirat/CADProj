import React from 'react';
import {Link} from 'react-router-dom';
import MUIButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const types = {
    small : 'small'
}

const Button = styled(MUIButton)(() => ({
    color: '#F6F6F6',
    backgroundColor: '#48695C',
    fontFamily: 'Montserrat',
    padding: '0.5rem 1.5rem',
    fontSize: '0.7rem',
    '&:hover' : {
        backgroundColor: '#3B574C'
    }
}));
function styledButton(props) {
    return (<Button variant="contained" size="large" disableRipple><Link style={{textDecoration:'none', color: '#F6F6F6'}} to={props.to}>{props.text}</Link></Button>)
}

export default styledButton;
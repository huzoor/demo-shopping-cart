import React, {useState} from "react";
import { makeStyles  } from '@mui/styles';

const useStyles = makeStyles( theme => ({
    
    headerMain:{
        display: 'flex',
        justifyContent:'center',
        color: '#fff'
    },
    headerLogo:{
        height: '25px',
        width: '25px'
    } 

}));

const Header = () => {
    const classes = useStyles();
    return <div className={classes.headerMain}> <span><img className={classes.headerLogo} src="https://www.walgreens.com/images/adaptive/mobileapps/Pharmacy/Walgreens_Corner_Logo.png" /></span>Confirm Rx </div>
}

export default Header;
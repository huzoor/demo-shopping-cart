import React, {useState} from "react";
import { makeStyles  } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Header from "../shared/header";
import Footer from "../shared/footer";
import { padding } from "@mui/system";
const useStyles = makeStyles( theme => ({
    root: {
       
      
    },
    header:{
        backgroundColor: theme.palette.primary.main,
        padding: '10px',
        display: 'flex',
       justifyContent: 'center'
    }
  }));
const ConfirmRx = (props) =>{
    const classes = useStyles();
    return(
        <>
            <CssBaseline />
            <Container maxWidth="xlg" >
              <Box sx={{  bgcolor: '#fff', height: '100vh', paddingTop: '10px'}} >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container  rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3, xlg:4 }}>
                        <Grid item xs={12} className={classes.header}>
                            <Header />
                        </Grid>
                        <Grid item xs={12}>
                            <div>
                                Body Contnt</div>
                        </Grid>
                        <Grid item xs={12} className={classes.header}>
                            <Footer />
                        </Grid>
                        
                    </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    )
}
export default ConfirmRx;
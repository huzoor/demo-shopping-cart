import React, {useState} from "react";
import { makeStyles  } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Sanitizer, CancelOutlined} from '@mui/icons-material';

import Header from "../shared/header";
import Footer from "../shared/footer";

const useStyles = makeStyles( theme => ({
    root: {
       
      
    },
    header:{
        backgroundColor: theme.palette.primary.main,
        padding: '10px',
        position: 'fixed',
        width: '95%'
    },
    bodyContent:{
        height: '94vh',
        paddingTop: '70px',
    },
    rxHeader:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    footer:{
        backgroundColor: theme.palette.primary.main,
    },

  }));
const ConfirmRx = (props) =>{
    const classes = useStyles();
    return(
        <>
            <CssBaseline />
            <Container maxWidth="xlg" >
              <Box sx={{  bgcolor: '#fff', height: '100vh', paddingTop: '10px'}} >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid  rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3, xlg:4 }}>
                        <Grid item xs={12} className={classes.header}>
                            <Header />
                        </Grid>
                        <Grid  item xs={12}  className={classes.bodyContent} >
                            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={12}>
                                    <Paper variant="outlined" >
                                        <div className={classes.rxHeader}>
                                            <div> <Sanitizer/> </div>
                                            <div>RX:  8560099-59106</div>
                                            <div><CancelOutlined/></div>
                                        </div>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12}>
                                    <Paper variant="outlined" >
                                            row 2
                                    </Paper>
                                </Grid>
                                <Grid item xs={12}>
                                    <Paper variant="outlined" >
                                            row 3
                                    </Paper>
                                </Grid>
                                <Grid item xs={12}>
                                    <Paper variant="outlined" >
                                            row 4
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.footer}>
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
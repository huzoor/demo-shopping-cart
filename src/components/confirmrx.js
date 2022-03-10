import React, {Component, useState} from "react";
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const ConfirmRx = (props) =>{

    return(
        <>
            <CssBaseline />
            <Container maxWidth="xlg" >
              <Box sx={{  bgcolor: '#cfe8fc', height: '100vh', paddingTop: '10px'}} >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container  rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3, xlg:4 }}>
                        <Grid item xs={8}>
                        <Item>xs=8</Item>
                        </Grid>
                        <Grid item xs={4}>
                        <Item>xs=4</Item>
                        </Grid>
                        <Grid item xs={4}>
                        <Item>xs=4</Item>
                        </Grid>
                        <Grid item xs={8}>
                        <Item>xs=8</Item>
                        </Grid>
                    </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    )
}
export default ConfirmRx;
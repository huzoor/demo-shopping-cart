import React, { Component, useState  } from "react";
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import RefillRx from './components/refillrx';
import ConfirmRx from './components/confirmrx';

import './styles.css';
const theme = createTheme({
  palette: {
    primary: {
      main: '#42a5f5',
    },
  },
});

function App () {
    const [page, setPage] = useState('confirm'); // state
    const [areaData, setAreaData] = useState(''); // state
 
    const changePage = (areaData) => {
      setAreaData(areaData)
      setPage('confirm')
    }
    return(
      <ThemeProvider theme={theme} className="App">
        {page === 'refill' ?  <RefillRx changePage={ areaData => changePage(areaData)} /> : <ConfirmRx areaData={areaData} /> }
      </ThemeProvider>
    )
  
}

export default App;

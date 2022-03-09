import React, { Component, useState  } from "react";
import RefillRx from './components/refillrx';
import ConfirmRx from './components/confirmrx';

import './styles.css';

function App () {
    const [page, setPage] = useState('refill'); // state
    const [areaData, setAreaData] = useState(''); // state
 
    const changePage = (areaData) => {
      setAreaData(areaData)
      setPage('confirm')
    }
    return(
      <div className="App">
        {page === 'refill' ?  <RefillRx changePage={ areaData => changePage(areaData)} /> : <ConfirmRx areaData={areaData} /> }
      </div>
    )
  
}

export default App;

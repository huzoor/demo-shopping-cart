import React, {Component, useState} from 'react';
import Button from '@mui/material/Button';

const RefillRx = (props) =>{
    const [areaInput, setAreaInput] = useState( {});

    const handleChange = (e) =>{
      setAreaInput(e.target.value);
    }

    const onRefillSubmit = () =>{
        console.log('onRefillSubmit called', props);
        props.changePage(areaInput);
    }

    return(
        <div className="refill-container">
        <div className="refill-payload">
          <h1>Rx Refill</h1>
          <div>
            <textarea className="refill-payload-text" onChange={ e => handleChange(e)}>{JSON.stringify(areaInput)}</textarea>
          </div>
          <Button variant="contained" type="button" onClick={ e => onRefillSubmit()}> SUBMIT</Button> 
        </div>
      </div>
    )
}

export default RefillRx;
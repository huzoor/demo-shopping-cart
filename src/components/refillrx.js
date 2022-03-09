import React, {Component, useState} from 'react';

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
          <button type="button" className="button-5" onClick={ e => onRefillSubmit()}> SUBMIT</button> 
        </div>
      </div>
    )
}

export default RefillRx;
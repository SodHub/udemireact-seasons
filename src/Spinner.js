import React from 'react';
import './SeasonDisplay.css';



const Spinner = (props) => {

    return  (
        <div className="ui active dimmer">
            <div className="ui text loader">{props.message}</div>
        </div>
    );
};


export default Spinner;



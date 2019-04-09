import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Brr, it is chilly',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month >2 && month <9) {
        return lat >0 ? 'summer' : 'winter';
    } else {
        return lat >0 ? 'winter' : 'summer';
    }
};


const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    return <div className = {`${season} season-display`}>
        <i className={`${iconName} icon massive icon-left`}> </i>
        <h1> {text} </h1>
        <i className={`${iconName} icon massive icon-right`}> </i>
    </div>;
};


export default SeasonDisplay;



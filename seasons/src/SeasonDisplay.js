import './SeasonDisplay.css'
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach',
        iconName: 'sun',
        color: 'red'
    },
    winter: {
        text: 'Burr it\'s cold',
        iconName: 'snowflake',
        color: 'blue'
    }
}

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName, color} = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${color} massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right ${color} massive ${iconName} icon`} />
        </div>
    );
}

export default SeasonDisplay;
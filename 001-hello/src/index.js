import React from 'react'
import ReactDOM from 'react-dom'

function getTime(){
    return (new Date()).toLocaleTimeString()
}

const App = () => {

    return (
        <div>
            <div>Current Time</div>
            <h3>{getTime()}</h3>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))
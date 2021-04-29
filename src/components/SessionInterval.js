import React from 'react';

function SessionInterval(props){
function increaseSession(){
    if(props.sessionLenght === 60){
        return;
    }
    props.increaseSession();
}
function decreaseSession(){
    if(props.sessionLenght === 1){
        return;
    }
    props.decreaseSession();
}
return(
    <section>
        <h4>Session Length</h4>
        <section className="interval-container">
            <button onClick={decreaseSession}>Down</button>
            <p className="interval-length">{props.sessionInterval}</p>
            <button onClick={increaseSession}>Up</button>
        </section>
    </section>

)
}
export default SessionInterval;


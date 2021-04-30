import React from 'react';

function SessionInterval(props){
function increaseSession(){
    if(props.sessionInterval === 60){
        return;
    }
    props.increaseSession();
}
function decreaseSession(){
    if(props.sessionInterval === 1){
        return;
    }
    props.decreaseSession();
}
return(
    <section>
        <h4>Session Length</h4>
        <section className="interval-container">
            <button disabled={props.isPlay === true ? "disabled" : ""} onClick={decreaseSession}>Down</button>
            <p className="interval-length">{props.sessionInterval}</p>
            <button disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseSession}>Up</button>
        </section>
    </section>

)
}
export default SessionInterval;


import React from 'react';

class Timer extends React.Component {
    constructor(){
        super();

        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0
        }
        this.playTimer = this.playTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
    }
    playTimer(){
        let intervalId = setInterval(this.decreaseTimer , 1000);
        this.setState({
            intervalId: intervalId
        })
    }
    decreaseTimer(){
        switch(this.state.timerSecond){
            case 0 :
                this.props.updateTimerMinute()
                this.setState({
                    timerSecond: 59
                })
                break;
            default:
                this.setState((prevState)=>{
                    return{
                        timerSecond: prevState.timerSecond - 1
                    }
                })
                break;
        }
    }
    stopTimer(){
        clearInterval(this.state.intervalId);
    }

    render(){
        return(
            <section>
                <section className="timer-container">
                    <h4>{this.state.isSession === true ? "Session" : "Break"}</h4>
                    <span className="timer">{this.props.timerMinute}</span>
                    <span className="timer">:</span>
                    <span className="timer">{this.state.timerSecond === 0 ? "00" : this.state.timerSecond < 10 ? "0" + this.state.timerSecond: this.state.timerSecond}</span>
                </section>
                <section className="timer-actions">
                    <button onClick={this.playTimer}>Play</button>
                    <button onClick={this.stopTimer}>Stop</button>
                    <button onClick={this.refreshTimer}>Refresh</button>
                </section>
            </section>
        );
    }
}
export default Timer; 
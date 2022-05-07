import React from 'react';

class TimerC extends React.Component{
  constructor(){
    super();

    this.state={
      isSession: true,
      timerSecond: 0,
      intervalId:0
    }
    this.play = this.play.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  play(){
    let intervalId = setInterval(this.decreaseTimer,1000);
    this.props.onPlayStopTimer(true);
    this.setState({
      intervalId:intervalId
    })
  }

  decreaseTimer(){
    switch(this.state.timerSecond){
      case 0:
        if(this.props.timerMinute === 0){
          if(this.state.isSession){
            this.setState({
              isSession:false
            });
            this.props.toggleInterval(this.state.isSession);
          }else{
            this.setState({
              isSession:true
            });
            this.props.toggleInterval(this.state.isSession);
          }
        }else{
          this.props.updateTimerMinute()
          this.setState({
          timerSecond:59
          })
        }
        
        break;
      default:
        this.setState((prevState) => {
          return{
            timerSecond:prevState.timerSecond -1
          }
        })
        break;

    }

  }
  stop(){
    clearInterval(this.state.intervalId);
    this.props.onPlayStopTimer(false);
  }
  reset(){
    this.stop();
    this.props.resetTimer();
    this.props.onPlayStopTimer(false);
    this.setState({
      timerSecond:0,
      isSession:true
    })

  }
  render(){
    return(
      <section className="my-reset">
        <section className='my-reset timer-container'>
          <h4 className="my-reset">{this.state.isSession === true? "Session" :
          "Break"}</h4>
          <span className='my-reset timer'>{this.props.timerMinute}</span>
          <span className='my-reset timer'>:</span>
          <span className='my-reset timer'>{this.state.timerSecond === 0
          ? "00" 
          : this.state.timerSecond < 10 
          ? "0" + this.state.timerSecond 
          : this.state.timerSecond}
          </span>
        </section>
        <section className='my-reset timer-actions'>
            <button onClick={this.play}>Play</button>
            <button onClick={this.stop}>Stop</button>
            <button onClick={this.reset}>Refresh</button>
        </section>
      </section>
    );
  }
}
export default React.memo(TimerC);
import React from 'react';
import BreakInterval from './BreakInterval';
import SessionLength from './SessionLength';
import TimerC from './TimerC';


class TimerApp extends React.Component {
  constructor(){
    super();

    this.state = {
      breaklength: 5,
      sessionLength: 25,
      timerMinute: 25,
      isPlay: false
    };


    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseSessionLength =
    this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength =
    this.onDecreaseSessionLength.bind(this);
    this.onToggleInterval=this.onToggleInterval.bind(this);
    this.onUpdateTimerMinute=this.onUpdateTimerMinute.bind(this);
    this.onResetTimer= this.onResetTimer.bind(this);
    this.onPlayStopTimer=this.onPlayStopTimer.bind(this);
  }

  onIncreaseBreakLength(){
    this.setState((prevState) => {
      return{
        breaklength: prevState.breaklength + 1
      }
    })
  }

  onDecreaseBreakLength(){
    this.setState((prevState) => {
      return{
        breaklength: prevState.breaklength - 1
      }
    })
  }

  onIncreaseSessionLength(){
    this.setState(prevState => {
      return{
        sessionLength: prevState.sessionLength + 1,
        timerMinute: prevState.sessionLength + 1
      };
    });
  }

  onDecreaseSessionLength(){
    this.setState(prevState => {
      return{
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.sessionLength - 1
      };
    });
  }

  onUpdateTimerMinute(){
    this.setState((prevState) => {
      return{
        timerMinute: prevState.timerMinute - 1
      }
    })
  }

  onToggleInterval(isSession){
    if(isSession){
      this.setState({
        timerMinute: this.state.sessionLength
      })
    } else{
      this.setState({
        timerMinute:this.state.breaklength
      })
    }
  }

  onResetTimer(){
    this.setState({
      timerMinute:this.state.sessionLength
    })
  }

  onPlayStopTimer(isPlay){
    this.setState({
      isPlay:isPlay
    })
  }

  render(){
    return (
      <main className = "my-reset" >
       <h2 className = "my-reset">Try The Stopwatch!</h2>
        <section className="my-reset interval-length-container">
          <BreakInterval
            isPlay = {this.state.isPlay}
            breakInterval={this.state.breaklength}
            increaseBreak = {this.onIncreaseBreakLength}
            decreaseBreak = {this.onDecreaseBreakLength}
          />
          <SessionLength
            isPlay = {this.state.isPlay}
            sessionLength={this.state.sessionLength}
            increaseSession = {this.onIncreaseSessionLength}
            decreaseSession = {this.onDecreaseSessionLength}
          />
        </section>
        <TimerC
          timerMinute={this.state.timerMinute}
          breaklength={this.state.breaklength}
          updateTimerMinute={this.onUpdateTimerMinute}
          toggleInterval={this.onToggleInterval}
          resetTimer={this.onResetTimer}
          onPlayStopTimer = {this.onPlayStopTimer}
        />
      </main>
    );
  }
}

export default React.memo(TimerApp);

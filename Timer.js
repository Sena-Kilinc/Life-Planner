import React, { Component } from 'react';
import TimerApp from "./Timer/TimerApp";

const Timer = () => {

    return (
      <div id="timer" className="my-reset">
          <TimerApp/>
   </div>
    );

}

export default React.memo(Timer);

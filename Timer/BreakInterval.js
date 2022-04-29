import React from 'react'

function BreakInterval(props){
    function decreaseCounter(){
      if(props.breakInterval === 1){
        return;
      }
      props.decreaseBreak();


    }
    function increaseCounter(){
      if(props.breakInterval === 60){
        return;
      }
      props.increaseBreak();
    }


  return(
    <section className="my-reset">
      <h4 className="my-reset">Break Time</h4>
      <section className =" my-reset interval-container">
        <button className="my-reset" disabled={props.isPlay===true ? "disabled" : ""} onClick = {decreaseCounter}>Down</button>
        <p className='my-reset interval-length'>{props.breakInterval}</p>
        <button className="my-reset"  disabled={props.isPlay===true ? "disabled" : ""} onClick = {increaseCounter}>Up</button>
      </section>
    </section>
  );
}

export default React.memo(BreakInterval);
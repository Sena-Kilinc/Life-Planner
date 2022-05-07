import React, { useContext } from 'react'
import { CalendarContext } from '../CalendarContext/CalendarContext';
import "../CalendarIndex.css"

function Task({task, style}) {

    const {setTask} = useContext(CalendarContext);

    return (
        <p style={style} onClick={()=> {setTask(task)}}>{task.name}</p>
    )
}

export default Task

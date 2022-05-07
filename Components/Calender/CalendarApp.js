import CalenderHeader from "./CalendarComponents/CalenderHeader";
import CalendarComp from "./CalendarComponents/CalendarComp";
import CalendarState from "./CalendarContext/CalendarContext";
import TaskForm from "./CalendarComponents/TaskForm";
import "./CalendarIndex.css"

function CalendarApp() {
  
  return (
    <div className="container">
      <CalendarState>
        <CalenderHeader />
        <CalendarComp />
        <TaskForm/>
      </CalendarState>
    </div>
  );
}

export default CalendarApp;

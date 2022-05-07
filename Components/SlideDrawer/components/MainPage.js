import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Actions} from "../drawerStore/Store";

function MainPage(props) {
    const dispatch = useDispatch()
    const selector = useSelector(state => state.toggle)
    const clickedHandler = ()=>{
        dispatch(Actions.toggle())
        console.log(selector)
    }
    return (
        <div>
            <button onClick={clickedHandler}>Click me!</button>
        </div>
    )
}

export default MainPage;
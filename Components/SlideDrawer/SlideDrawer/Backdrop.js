import React from 'react'
import './Backdrop.css'
import {useDispatch} from "react-redux";
import {Actions} from "../drawerStore/Store";


function Backdrop (props) {
    const dispatch = useDispatch()
    const closeHandler = ()=>  {
        dispatch(Actions.falsify())
    }
        return(
            <div className="backdrop" onClick={closeHandler}/>
        )
    }
export default Backdrop;

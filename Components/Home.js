import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {Actions} from "./SlideDrawer/drawerStore/Store";
import axios from 'axios';

const Home= () => {
    const dispatch = useDispatch()
    const musicClickedHandler = ()=>{
        dispatch(Actions.toggle())
    }

    const [quote, setQuote] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            fetchRandomQuote();
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    async function fetchRandomQuote() {
        try {
            const quoteObject = await axios.get("https://api.quotable.io/random");
            setQuote(quoteObject.data.content);
        } catch (error) {
            console.log(error.message);
        }
    }
        const quoteValidation = !!quote;
    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
             <li><a className="smoothscroll" href="#notes">Notes</a></li>
	         <li><a className="smoothscroll" href="#timer">Timer</a></li>
            <li><a className="smoothscroll" href="#calendar">Calendar</a></li>
            <li><button onClick={musicClickedHandler}>Music</button></li>
         </ul>

      </nav>


      <div className="row banner">
         <div className="banner-text">
             {quoteValidation && <h2 className="responsive-headline">“{quote}”</h2>}
             {!quoteValidation && <h2 className="responsive-headline">Loading ...</h2> }
            <hr />
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );

}

export default Home;

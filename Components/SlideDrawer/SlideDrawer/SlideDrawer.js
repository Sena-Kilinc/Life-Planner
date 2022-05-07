import React from 'react'
import './SlideDrawer.css'
import {useSelector} from "react-redux";

function SlideDrawer(props) {
    let drawerClasses = 'side-drawer'
    const selector = useSelector(state => state.toggle)
    if (selector) {
        drawerClasses = 'side-drawer open'
    }
    return (
        <div className={drawerClasses}>
            <iframe width="100%" height="100%"
                    src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8Uebhn9wzrS?utm_source=generator&theme=0"
                    frameBorder="0" allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"/>
        </div>
    )
}

export default SlideDrawer;
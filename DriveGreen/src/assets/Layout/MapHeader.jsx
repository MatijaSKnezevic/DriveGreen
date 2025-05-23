import headerLogo from "../Images/HeaderLogo.png"
import location from "../Images/Location.png"
import mapUser from "../Images/MapUser.png"
import arrowDown from "../Images/ArrowDown.png"
import { UserPopup } from "./UserPopup"
import { useState } from "react"

export function MapHeader() {

    const [visible, setVisible] = useState(false);

    function SeeUserInfo() {
        setVisible(prevVisible => !prevVisible)
    }

    const MapHeaderElements = {
        logo: headerLogo,
        location: location,
        user: mapUser,
        down: arrowDown,
        language: "SR",
    }

    return (

            <div id="map-header">

                <div className="header-left">
                <img src={MapHeaderElements.logo} alt="map-logo" />
                </div>

                <div className="header-right">

                <img 
                className="header-location-img"
                src={MapHeaderElements.location} 
                alt="map-location" 
                />
                <img 
                className="header-user-img"
                src={MapHeaderElements.user} 
                onClick={SeeUserInfo}
                alt="map-user" 
                />
                <img 
                className="header-user-down-img"
                src={MapHeaderElements.down} 
                alt="map-down" 
                />
                <p
                className="language-text"
                >{MapHeaderElements.language}</p>
                <img
                className="header-down-img-again" 
                src={MapHeaderElements.down} 
                alt="map-down" />

                </div>

                {visible ? <UserPopup/> : null}
            </div>

    )

}
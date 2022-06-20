import { faArrowRightArrowLeft, faBuildingNgo, faCheck, faPhoneVolume, faTruckFast, faTruckPickup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "../styles/banners.css";


const Banners = () => {
    return (
        <div className="b-container">
            <div className="b-row">
                <div className="b-col">
                    <FontAwesomeIcon icon={faBuildingNgo} />
                    <span>NGO</span>
                </div>
                <div className="b-col">
                    <FontAwesomeIcon icon={faTruckPickup} />
                    <span>Pick up</span>
                </div>
                <div className="b-col">
                    <FontAwesomeIcon icon={faCheck} />
                    <span>Quality Product</span>
                </div>
                <div className="b-col">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                    <span>Phone Support</span>
                </div>
            </div>
        </div>
    )

}

export default Banners;
import React from "react";
import gpsIcon from "../images/gps.svg";
import "../styles/Card.css";

function Card(props) {
    return (
        <div>
            <div className="card">
                <img
                    src={props.imageUrl}
                    alt="Location"
                    className="card--image"
                />
                <div className="card--info">
                    <img src={gpsIcon} alt="location-icon" className="card--info--gps" />
                    <span className="card--info--country">{props.location}</span>
                    <a href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="card--info-gmaps" >
                        View on Google Maps
                    </a>
                    <h2 className="card--info--title">{props.title}</h2>
                    <p className="card--info--dates" >{props.startDate} - {props.endDate}</p>
                    <p className="card--info--description" >{props.description}</p>
                </div>
            </div>
            <hr className="card-separator" />
        </div>
    );
}

export default Card;

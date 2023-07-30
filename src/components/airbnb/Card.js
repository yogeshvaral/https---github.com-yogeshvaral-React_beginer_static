import React from "react";
export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="sachin" className="card--image" />
            <div className="card--stats">
                <img src={props.star_image} alt="star" className="star--image" />
                <span>{props.rating}</span>
                <span className="gray">({props.review_count}) .</span>
                <span className="gray"> {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">from ${props.price} / Person</span></p>           
        </div>
    )
}
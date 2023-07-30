import React from "react";

export default function Card_copy(props) {
    const image_path = "C:\\Yogesh\\Hadoop\\ReactJS\\FreeCode_Camp\\React_bob_rizoll\\Beginners_Course\\my-app\\src\\images\\sachin_image.jpg"
    let badge_text
    if (props.openSpot ===0){
        badge_text = 'SOLD OUT'
    }else if (props.location === "Online")
    {
        badge_text = "Online"
    }

    return (
        <div className="card--copy" key={props.key}>
            {/* {props.openSpot === 0 && <div className="card--badge">SOLD OUT</div>} */}
            { badge_text && <div className="card--badge">{badge_text}</div>}
            <img src={props.img} alt="sachin" className="card--image" />
            <div className="card--stats">
                <img src={props.star_image} alt="star" className="star--image" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.review_count}) .</span>
                <span className="gray"> {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">from ${props.price} / Person</span></p>           
        </div>
    )
}
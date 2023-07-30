import React from "react";
import data from "./data";
import Card_copy from "./Card_copy";
export default function Cards(){

    return ( 
        <div className="cards--data">
            {
                data.map( card_info => {
            
                         return(<Card_copy {...card_info}/>)
                     }
                 )}
        </div>
        
    )
}
import React from "react";

export default function ArrayTest() {
    const colors = ["black", "white", "red", "green", "yellow", "pink"];
    return (
        <div>
            {colors.map(color => color[0].toUpperCase() + color.slice(1))}
            {colors.map(color => {
                return (
                    <h3>{color}</h3>
                )
            })}
        </div>
    )
}
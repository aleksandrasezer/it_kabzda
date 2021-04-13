import React, {useState} from "react";

export function OnOff() {
    const [on, setOn] = useState(false)
    const OnButtonStyle = {
        width: "30px",
        height: "26px",
        border: "1px solid black",
        display: "inline-block",
        padding: "1px",
        backgroundColor: on ? "green" : "white"
    }
    const OffButtonStyle = {
        width: "30px",
        height: "26px",
        border: "1px solid black",
        display: "inline-block",
        padding: "1px",
        backgroundColor: !on ? "red" : "white"
    }
    const indicatorStyle = {
        width: "22px",
        height: "22px",
        border: "1px solid black",
        borderRadius: "50%",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "red" : "white"
    }

    return (
        <div>
            <div style={OnButtonStyle} onClick={() => {setOn(true)}}>On</div>
            <div style={OffButtonStyle} onClick={() => {setOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )

}
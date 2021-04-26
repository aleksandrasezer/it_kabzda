import React from "react";

type OnOffPropsType = {
    on: boolean
    onClickEvent: (on: boolean) => void
}
export function OnOff(props: OnOffPropsType) {
    const OnButtonStyle = {
        width: "30px",
        height: "26px",
        border: "1px solid black",
        display: "inline-block",
        padding: "1px",
        backgroundColor: props.on ? "green" : "white"
    }
    const OffButtonStyle = {
        width: "30px",
        height: "26px",
        border: "1px solid black",
        display: "inline-block",
        padding: "1px",
        backgroundColor: !props.on ? "red" : "white"
    }
    const indicatorStyle = {
        width: "22px",
        height: "22px",
        border: "1px solid black",
        borderRadius: "50%",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "red" : "white"
    }

    return (
        <div>
            <div style={OnButtonStyle} onClick={() => {props.onClickEvent(true)}}>On</div>
            <div style={OffButtonStyle} onClick={() => {props.onClickEvent(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )

}
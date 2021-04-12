import React from "react";
import s from "./Rating.module.css";

type StarPropsType = {
    selected: boolean
}

export function Rating() {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>

        </div>
    )
}

function Star(props: any) {
    console.log("star rendering")
    if (props.selected === true) {
        return <span className={s.star}>
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0HCg7VrOsoL6cKwOu-H2Rt7DMn6CTkiwoQ&usqp=CAU"/>
    </span>
    }
        else {
            return <span className={s.star}>
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQER6JhXFPa2aXEJ7QWrecyBdlNDt5wySWA&usqp=CAU"/>
        </span>
        }
}
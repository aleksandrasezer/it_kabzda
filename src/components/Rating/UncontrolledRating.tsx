import React, {useState} from "react";
import s from "./Rating.module.css";

type StarPropsType = {
    selected: boolean
}

export function UncontrolledRating() {
    const [value, setValue] = useState(0)
    return (
        <div>
            <span onClick={() => { setValue(1) }}><Star selected={value > 0}/></span>
            <span onClick={() => { setValue(2) }}><Star selected={value > 1}/></span>
            <span onClick={() => { setValue(3) }}><Star selected={value > 2}/></span>
            <span onClick={() => { setValue(4) }}><Star selected={value > 3}/></span>
            <span onClick={() => { setValue(5) }}><Star selected={value > 4}/></span>

        </div>
    )
}

function Star(props: StarPropsType) {
    console.log("star rendering")
    return <span className={s.star}>{
        props.selected ?
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0HCg7VrOsoL6cKwOu-H2Rt7DMn6CTkiwoQ&usqp=CAU"/>
                :
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQER6JhXFPa2aXEJ7QWrecyBdlNDt5wySWA&usqp=CAU"/>
    }
    </span>
}
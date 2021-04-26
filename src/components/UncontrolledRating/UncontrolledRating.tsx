import React, {useState} from "react";
import s from "../Rating/Rating.module.css";

type StarPropsType = {
    selected: boolean
}

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export function UncontrolledRating(props: RatingPropsType) {
    const [value, setValue] = useState(props.defaultValue ? props.defaultValue : 0)
    return (
        <div>
            <span onClick={() => { setValue(1); props.onChange(1) }}><Star selected={value > 0}/></span>
            <span onClick={() => { setValue(2); props.onChange(2) }}><Star selected={value > 1}/></span>
            <span onClick={() => { setValue(3); props.onChange(3) }}><Star selected={value > 2}/></span>
            <span onClick={() => { setValue(4); props.onChange(4) }}><Star selected={value > 3}/></span>
            <span onClick={() => { setValue(5); props.onChange(5) }}><Star selected={value > 4}/></span>

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
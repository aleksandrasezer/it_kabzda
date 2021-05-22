import React from "react";
import s from "./Rating.module.css";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
type RatingPropsType = {
    value: RatingValueType
    onClickEvent: (value:RatingValueType) => void
}

export const Rating = React.memo(SecretRating)

export function SecretRating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0} onClickEvent={props.onClickEvent} value={1}/>
            <Star selected={props.value > 1} onClickEvent={props.onClickEvent} value={2}/>
            <Star selected={props.value > 2} onClickEvent={props.onClickEvent} value={3}/>
            <Star selected={props.value > 3} onClickEvent={props.onClickEvent} value={4}/>
            <Star selected={props.value > 4} onClickEvent={props.onClickEvent} value={5}/>

        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onClickEvent: (value:RatingValueType) => void
    value: RatingValueType
}
function Star(props: StarPropsType) {
    console.log("star rendering")
    return <span className={s.star} onClick={() => {props.onClickEvent(props.value)}}>{
        props.selected ?
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0HCg7VrOsoL6cKwOu-H2Rt7DMn6CTkiwoQ&usqp=CAU"
                alt='selected_star'/>
            :
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQER6JhXFPa2aXEJ7QWrecyBdlNDt5wySWA&usqp=CAU"
                alt='empty_star'/>
    }
    </span>
}
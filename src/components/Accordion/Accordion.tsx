import React from "react";
import {AccOptions} from "../../index";

type AccordionPropsType = {
    title: string
    onClickEvent: (collapsed: boolean) => void
    collapsed: boolean
    accOptions: AccOptions
}
type AccordionTitleType = {
    title: string
    onClickEvent: (collapsed: boolean) => void
    collapsed: boolean
}
type AccordionBodyType = {
    accOptions: AccOptions
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title}
                            collapsed={props.collapsed}
                            onClickEvent={props.onClickEvent} />
            {!props.collapsed && <AccordionBody accOptions={props.accOptions}/> }
        </div>
    )
}

function AccordionTitle(props: AccordionTitleType) {
    return <h3 onClick={() =>{props.onClickEvent(props.collapsed)}}>{props.title}</h3>
}

function AccordionBody(props: AccordionBodyType) {

    return (
        <ul>
            {props.accOptions.map((f) =>
                <li onClick={(e) => alert(`I want ${f.fruit}, please`)}>{f.id}</li>)}
    </ul>
    )
}
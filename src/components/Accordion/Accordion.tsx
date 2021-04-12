import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}
type AccordionTitlePropsType = {
    title: string
}
type AccordionBodyPropsType = {
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody collapsed={props.collapsed}/>
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>{props.title}</h3>
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('fgh')
    if (props.collapsed) {
        return <> </>
    } else
        return <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
}
import React, {useState} from "react";

type AccordionPropsType = {
    title: string
    onClickEvent: (collapsed: boolean) => void
    collapsed: boolean
}

export function ControlledAccordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title}
                            collapsed={props.collapsed}
                            onClickEvent={props.onClickEvent}/>
            {!props.collapsed && <AccordionBody /> }
        </div>
    )
}

function AccordionTitle(props: AccordionPropsType) {
    return <h3 onClick={() =>{props.onClickEvent(props.collapsed)}}>{props.title}</h3>
}
type AccordionBodyPropsType = {
    
}
function AccordionBody() {

    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    const [collapsed,setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <button onClick={() => {setCollapsed(!collapsed)}}>TOGGLE</button>
            {!collapsed && <AccordionBody /> }

        </div>
    )
}

function AccordionTitle(props: AccordionPropsType) {
    return <h3>{props.title}</h3>
}
function AccordionBody() {
        return <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
}
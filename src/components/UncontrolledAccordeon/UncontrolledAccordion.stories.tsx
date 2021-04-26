import React from "react";
import { Meta } from "@storybook/react";
import {UncontrolledAccordion} from "./UncontrolledAccordion";


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
} as Meta

export const Accordion_Click = () => {
    return <UncontrolledAccordion title={'Notes'} />
}
import React, {useState} from "react";
import { Meta } from "@storybook/react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion
} as Meta

const onClickCallback = action('Accordion clicked')

export const Accordion_Open = () => <Accordion title={'Notes'} onClickEvent={onClickCallback} collapsed={false} />
export const Accordion_Closed = () => <Accordion title={'Notes'} onClickEvent={onClickCallback} collapsed={true} />
export const Accordion_Click = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion title={'Notes'} onClickEvent={() => setValue(!value)} collapsed={value} />
}
import React, {useState} from "react";
import { Meta } from "@storybook/react";
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff
} as Meta

const onClickCallback = action('OnOff clicked')

export const OnOff_On = () => <OnOff on={true} onClickEvent={onClickCallback} />
export const OnOff_Off = () => <OnOff on={false} onClickEvent={onClickCallback} />
export const OnOff_Click = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onClickEvent={setValue} />
}
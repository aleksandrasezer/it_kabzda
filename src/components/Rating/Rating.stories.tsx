import React, {useState} from 'react';
import { Meta } from '@storybook/react';
import {Rating, RatingValueType} from "./Rating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Rating',
    component: Rating,
} as Meta;

const onClickCallback = action('Rating changed')

export const EmptyRating = () => <Rating value={0} onClickEvent={onClickCallback}/>
export const Rating1 = () => <Rating value={1} onClickEvent={onClickCallback}/>
export const Rating2 = () => <Rating value={2} onClickEvent={onClickCallback}/>
export const Rating3 = () => <Rating value={3} onClickEvent={onClickCallback}/>
export const Rating4 = () => <Rating value={4} onClickEvent={onClickCallback}/>
export const Rating5 = () => <Rating value={5} onClickEvent={onClickCallback}/>
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} onClickEvent={setRating} />
}
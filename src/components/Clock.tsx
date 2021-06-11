import React, {useEffect, useState} from "react";

const addZero = (num: number) => num < 10 ? `0${num}` : num

export const Clock = () => {

    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])


    return (

        <div>
            <br/>
            {`${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`}
            <br/>
        </div>
    )

}
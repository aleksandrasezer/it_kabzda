import React, {useState} from "react";
import s from './Select.module.css'

type SelectPropsType = {
    fruits: FruitsType
}
export type FruitsType = { id: number, title: string }[]

export function Select(props: SelectPropsType) {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('choose one')
    return (
        <div className={s.selectContainer}>
            <div onClick={() => setOpen(!open)}
                 className={s.value}>{value}</div>
            {open &&
            props.fruits.map(f => <div key={f.id}
                                       className={s.options}
                                       onClick={() => {setValue(f.title);
                                       setOpen(false)}}>{f.title}</div>)}

        </div>
    )
}
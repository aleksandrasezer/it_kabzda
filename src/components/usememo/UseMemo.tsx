import React, {useMemo, useState} from "react";
import {FruitsType} from "../Select/Select";

type PropsType = { fruits: FruitsType }

export const Usememo = (props: PropsType) => {

    const[fruits,setFruits] = useState(props.fruits)
    const [count, setCount] = useState(0)

    //Функция срабатывает каждый раз, потому что в зависимостях прописан count.
    const mappedFruits = useMemo(() => {setFruits([...fruits,{id:8,title:'new'}])
        return fruits.map(f => <div>{f.title}</div>)},[count])

return <div>
    Here we'll see <br/>
    if the mapped and filtered fruits <br/>
    will be rerendered

    <div>
        {mappedFruits}
    </div>

    <div>
        {count}
        <button onClick={() => setCount(count + 1)}>-Inc-</button>
    </div>
</div>
}

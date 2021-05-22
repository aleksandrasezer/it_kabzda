import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {FruitsType, Select} from "./components/Select/Select";
import {AccOptions} from "./index";
import {Counter} from "./components/Counter/Counter";
import {Usememo} from "./components/usememo/UseMemo";


function App(props: { accOptions: AccOptions }) {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsedValue, setCollapsedValue] = useState<boolean>(true)
    const [switchOn, setSwitchOn] = useState(false)
    const fruits: FruitsType =
        [{id: 1, title: 'apple'}, {id: 2, title: 'plum'}, {id: 3, title: 'pear'}]
    return (
        <div className={"app"}>
            <>Article 1</>
            <Rating value={ratingValue} onClickEvent={setRatingValue}/>
            <OnOff on={switchOn} onClickEvent={setSwitchOn}/>
            <Accordion title={"Notes"}
                       onClickEvent={() => {
                           setCollapsedValue(!collapsedValue)
                       }}
                       collapsed={collapsedValue}
                       accOptions={props.accOptions}/>
            <Select fruits={fruits}/>
            <Counter/>
            <Usememo fruits={fruits}/>
        </div>
    );
}


export default App;

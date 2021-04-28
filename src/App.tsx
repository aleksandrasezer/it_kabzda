import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsedValue, setCollapsedValue] = useState<boolean>(true)
    const [switchOn, setSwitchOn] = useState(false)
    return (
        <div className={"app"}>
            <>Article 1</>
            <Rating value={ratingValue} onClickEvent={setRatingValue}/>
            <OnOff on={switchOn} onClickEvent={setSwitchOn}/>
            <Accordion title={"Notes"}
                       onClickEvent={() => {setCollapsedValue(!collapsedValue)}}
                       collapsed={collapsedValue}/>
        </div>
    );
}


export default App;

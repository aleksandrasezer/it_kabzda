import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from "./components/UncontrolledAccordeon/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
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
            <UncontrolledRating/>
            <OnOff on={switchOn} onClickEvent={setSwitchOn}/>
            <UncontrolledOnOff/>
            <UncontrolledAccordion title={"Menu"}/>
            <Accordion title={"Notes"}
                       onClickEvent={() => {setCollapsedValue(!collapsedValue)}}
                       collapsed={collapsedValue}/>
        </div>
    );
}


export default App;

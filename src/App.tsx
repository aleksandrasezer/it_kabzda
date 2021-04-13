import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {ControlledRating, RatingValueType} from "./components/Rating/ControlledRating";
import {ControlledAccordion} from "./components/Accordion/ControlledAccordion";
import {ControlledOnOff} from "./components/OnOff/ControlledOnOff";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsedValue, setCollapsedValue] = useState<boolean>(true)
    const [switchOn, setSwitchOn] = useState(false)
    return (
        <div className={"app"}>
            <>Article 1</>
            <ControlledRating value={ratingValue} onClickEvent={setRatingValue}/>
            <UncontrolledRating/>
            <ControlledOnOff on={switchOn} onClickEvent={setSwitchOn}/>
            <OnOff/>
            <Accordion title={"Menu"}/>
            <ControlledAccordion title={"Notes"}
                                 onClickEvent={() => {setCollapsedValue(!collapsedValue)}}
                                 collapsed={collapsedValue}/>
        </div>
    );
}


export default App;

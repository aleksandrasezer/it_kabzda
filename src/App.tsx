import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <>Article 1</>
            <Rating />
            <Accordion title={"Menu"} collapsed={true}/>
            <Accordion title={"Classes"} collapsed={false}/>
            <>Article 2</>
            <Rating />
        </div>
    );
}





export default App;

import React from 'react';
import './App.css';
import {Students} from "./Components/Students/Students";
import {Cars} from "./Components/Cars/Cars";
import {Money} from "./Components/Money/Money";
import {MouseEvent} from "./Components/MouseEvent/MouseEvent";

function App() {
    return (
        <>
            <Students/>
            ------------------
            <Cars/>
            ------------------
            <MouseEvent />
            ------------------
            <Money/>
            ------------------
        </>
  );
}

export default App;

import React from "react";
import { BusinessLogic } from "./BusinessLogic";

export const App = (props: unknown) => {
    // performance.mark('Isaac-marker');
    const businessLogic = new BusinessLogic();
    
    const clickHandler = () => {
        businessLogic.doSomething();
    };
    return <button onClick={clickHandler}>Click me</button>;
}
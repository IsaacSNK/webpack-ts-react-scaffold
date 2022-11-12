import React from "react";

export const App = (props: unknown) => {
    const clickHandler = () => {
        console.log('Clicked!');
    };
    return <button onClick={clickHandler}>Click me</button>;
}
import { useState } from "react";

function InputEvent(){

    const [name, setName]= useState('')

    function changeHandle(event){
        setName(event.target.value);
    }

    return(
        <>
            <h2>Event Handling Example</h2>
            <input type="text" onChange={changeHandle} placeholder="Enter Name" />
            <h3>Name is: {name}</h3>
        </>
    )
}

export default InputEvent
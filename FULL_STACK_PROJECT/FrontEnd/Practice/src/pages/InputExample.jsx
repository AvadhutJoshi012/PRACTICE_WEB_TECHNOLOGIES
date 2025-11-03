import { useState } from "react"


function InputExample(){
    const [name, setName]=useState('')

    return(
        <>
            <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
            <h3>Your Name is: {name}</h3>
        </>
    )
}

export default InputExample
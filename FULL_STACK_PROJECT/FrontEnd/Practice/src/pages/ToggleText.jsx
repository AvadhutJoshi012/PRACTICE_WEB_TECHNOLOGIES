import { useState } from "react";


function ToggleText(){
    const [isVisible, setIsVisible]=useState(true)
    return(
        <>
            <div>
                <button onClick={()=>setIsVisible(!isVisible)}>Toggle</button>
                {isVisible?<p>Hello, Avadhut</p>:<p>Message Hidden</p>}
            </div>
        </>
    )
}

export default ToggleText
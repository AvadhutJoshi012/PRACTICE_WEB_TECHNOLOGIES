import { useState } from "react";


function FormExample(){

    const [email, setEmail]= useState('')

    function handleSubmit(e){
        e.preventDefault;
        alert(`Your email id is: ${email}`);
    }

    return(
        <>
            <h3>Submit Email</h3>

            <form onSubmit={handleSubmit}>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
                <br/>
                <button type="submit">Submit</button>
            </form>
            
        </>
    )
}

export default FormExample
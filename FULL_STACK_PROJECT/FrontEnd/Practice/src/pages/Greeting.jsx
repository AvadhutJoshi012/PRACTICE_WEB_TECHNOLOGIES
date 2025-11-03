

function Greeting(){
    
    function sayHello(name){
        alert(`Hello ${name}`);
    }

    return(
        <>
            <button onClick={()=>sayHello("Avadhut")}>Say Hello</button>
        </>
    )
}

export default Greeting
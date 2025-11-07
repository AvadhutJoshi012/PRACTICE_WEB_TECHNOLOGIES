
function GreetParameter(){

    function Greet(name){
        alert(`Hello, ${name}`)
    }

    return(
        <>
            <button onClick={()=>Greet("Avadhut")}>Greet Me</button>
        </>
    )
}

export default GreetParameter
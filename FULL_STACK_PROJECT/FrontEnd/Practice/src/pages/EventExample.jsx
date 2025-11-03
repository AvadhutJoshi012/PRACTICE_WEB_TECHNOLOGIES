

function EventExample(){

    function OnClick(){
        alert("Button Clicked");
    }

    return(
        <>
            <button onClick={OnClick}>Click Me!</button>
        </>
    )
}

export default EventExample
import React, { useRef } from 'react'

function UncontrolledComponent() {
    let inputRef = useRef(null)
    let inputRef2 = useRef(null)
    function submitf(e){
        e.preventDefault()
        console.log(inputRef.current.value)
        console.log(inputRef2.current.value)
        let inputRef3=document.getElementById("inputRef3").value
        console.log(inputRef3)
    }
    return (
        <div>
            <hr />
            <form onSubmit={submitf}>
                <h1>Uncontrolled Component</h1>
                <input ref={inputRef} type='text' placeholder='Name' /> <br /> <br />
                <input ref={inputRef2} type='text' placeholder='Class' /> <br /> <br />
                <input id='inputRef3' type='text' placeholder='Roll No' /> <br /> <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UncontrolledComponent

import React from 'react'

function LiftingStateUp(props) {
  let name="Ameer Hamza"
  return (
    <div>
      <hr/>
      <b>Lifting State Up</b>
      <h1>Name</h1>
      <button onClick={()=>props.alert(name)}>Click me</button>
    </div> 
  )
}

export default LiftingStateUp


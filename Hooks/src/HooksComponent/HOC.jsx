import React,{useState} from 'react'

function HOC() {
  return (
    <div>
      <hr/>
      <h1>Hight order component</h1>
      <HighOCred cmp={Counter}/>
      <HighOCgreen cmp={Counter}/>
      <HighOCBlue cmp={Counter}/>
      <hr/>
    </div>
  )
}

function HighOCred(props){
    return(
        <div>
            <h1 style={{backgroundColor:'red', width:'10%'}}><props.cmp/></h1>
        </div>
    )
}

function HighOCgreen(props){
    return(
        <div>
            <h1 style={{backgroundColor:'green', width:'10%'}}><props.cmp/></h1>
        </div>
    )
}
function HighOCBlue(props){
    return(
        <div>
            <h1 style={{backgroundColor:'blue', width:'10%'}}><props.cmp/></h1>
        </div>
    )
}

function Counter(){
    let [val,setvalue]=useState(0)
    return(
        <div>
        <h1>{val}</h1>
        <button onClick={()=>setvalue(val+1)}>Count</button>
        </div>
    )
}

export default HOC

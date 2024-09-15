import React, { Component, createRef } from 'react'

export default class Ref extends Component {
    constructor(){
        super();
        this.InputRef=createRef()
    }
    componentDidMount(){
        // console.log(this.InputRef.current.value=1000)
    }
    getValue(){
        console.log(this.InputRef.current.value)
        this.InputRef.current.style.color="red"
        this.InputRef.current.style.backgroundColor="black"
    }
  render(){
    return (
      <div>
        <hr/>
        <h1>Ref In React</h1>
        <input type='text' ref={this.InputRef}/>
        <button onClick={()=>this.getValue()}>Get Value {}</button>
        <hr/>
      </div>
    )
  }
}

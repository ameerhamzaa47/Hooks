import { useState, useRef, forwardRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffect from './HooksComponent/useEffect'
import UseEffectwithcondition from './HooksComponent/useEffect with condition'
import Style from './HooksComponent/style'
import Bootstrap from './HooksComponent/BootStrap'
import MapF from './HooksComponent/Map function'
import BootStrapTable from './HooksComponent/Bootstrap Table'
import NestedList from './HooksComponent/NestedList'
import LiftingStateUp from './HooksComponent/LiftingStateUp'
import Ref from './HooksComponent/Ref'
import ForRef from './HooksComponent/ForwardRef'
import ControlledComponent from './HooksComponent/Controlled Component'
import UncontrolledComponent from './HooksComponent/UncontrolledComponent'
import HOC from './HooksComponent/HOC'

function App() {
  function ParentAlert(data) {
    alert(data)
  }
  let ForwardR=useRef(null)

  function Forward(){
    ForwardR.current.value="1000"
    ForwardR.current.style.color="red"
    ForwardR.current.focus()
  }

  return (
    <div>
      <UseEffect />
      <UseEffectwithcondition />
      <Style />
      <Bootstrap />
      <MapF />
      <BootStrapTable />
      <NestedList />
      <LiftingStateUp alert={ParentAlert} />
      <Ref/>
      <ForRef ref={ForwardR} />
      <button onClick={Forward}>get Value</button>
      <ControlledComponent/>
      <UncontrolledComponent/>
      <HOC/>
    </div>
  )
}

export default App

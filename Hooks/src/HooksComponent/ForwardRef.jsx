import React,{forwardRef} from 'react'

function ForRef(props,ref) {
  return (
    <div>
        <h1>Forward Ref</h1>
      <input type='text' ref={ref}/>
    </div>
  )
}

export default forwardRef(ForRef)

import {Button} from 'react-bootstrap'

function Bootstrap(){
    return(
        <div>
            <hr/>
            <b>BootStrap</b><br/><br/>
        <Button onClick={()=>alert("Bootstrap Button")}>Click me</Button>
        <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
        </div>
        
    )
}
export default Bootstrap
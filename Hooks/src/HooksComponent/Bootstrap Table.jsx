import {Table} from "react-bootstrap"
function BootStrapTable(){
    let users=[
        {name:"Hamza",class:"FSC",Contact:"111",},
        {name:"Ahmed",class:"BSC",Contact:"111",},
        {name:"Hamza",class:"BSCS",Contact:"121"},
        {name:"Talha",class:"ICS",Contact:"222"},
    ]
    return(
        <div>
            <b>List with Bootstrap Table</b>
            <Table  bordered variant="red">
                {
                users.map((item,index)=>
                        item.Contact === '111'?
                        <tr>
                        <td>{index} {item.name}</td>
                        <td>{item.class}</td>
                        <td>{item.Contact}</td>
                    </tr>
                    :null
                )
            }
            </Table>
        </div>
    )
}
export default BootStrapTable;
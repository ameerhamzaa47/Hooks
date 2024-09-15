import React from 'react'
import {Table} from 'react-bootstrap'

function NestedList() {
    let user=[
        {name:"Ahmed",age:24,Address:[
            {Hn:40,city:"Gujranwala",Country:"Pakistan"},
            {Hn:44,city:"Lahore",Country:"Pakistan"},
            {Hn:10,city:"Gujranwala",Country:"Pakistan"},
            {Hn:20,city:"Sailkot",Country:"Pakistan"},
        ]},
        {name:"Hamza",age:20,Address:[
            {Hn:20,city:"Gujranwala",Country:"Pakistan"},
            {Hn:84,city:"Lahore",Country:"Pakistan"},
            {Hn:14,city:"Queeta",Country:"Pakistan"},
            {Hn:30,city:"Islamabad",Country:"Pakistan"},
        ]},
        {name:"Talha",age:17,Address:[
            {Hn:10,city:"Gujranwala",Country:"Pakistan"},
            {Hn:74,city:"Lahore",Country:"Pakistan"},
            {Hn:30,city:"Peshawar",Country:"Pakistan"},
            {Hn:54,city:"Sakrdu",Country:"Pakistan"},
        ]},
    ]
  return (
    <div>
      <hr/>
      <b>Nested List</b>
      <Table bordered >
        <tbody>
            <tr>
                <td>Sr No.</td>
                <td>Name</td>
                <td>Age</td>
                <td>Address</td>
            </tr>
        </tbody>
        {
            user.map((item,i)=>
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{
                    item.Address.map((data)=>
                    <tr>
                        <td>{data.Hn}</td>
                        <td>{data.city}</td>
                        <td>{data.Country}</td>
                    </tr>)
                    }</td>
                </tr>
            )
        }
      </Table>
    </div>
  )
}

export default NestedList

function MapF(){
    let Student=[
        {name:"Ahmed",class:"BSC",age:"24"},
        {name:"Hamza",class:"BSCS",age:"20"},
        {name:"Talha",class:"ICS",age:"17"}
    ]
    return(
        <div>
        <hr/>
        <b>Array Listing with Map function</b>
        <table border={"1"}>
            <tr>
                <td>Name</td>
                <td>Class</td>
                <td>Age</td>
            </tr>
        {
        Student.map((item)=>
            <tr>
                <td>{item.name}</td>
                <td>{item.class}</td>
                <td>{item.age}</td>
            </tr>

        )
        }
        </table>
        <hr/>
        </div>
    )
}
export default MapF;
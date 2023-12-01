type tableProps = {
    label:string,
    dataSource : any[],
    cols:any[]

}
export default function BATable(props:tableProps){
    const {label , dataSource , cols} = props
    return(
    <table className="table table-stripted table-borderd ">
        <thead>
            <tr>
                {cols.map((x,i)=>{
                    return(
                    <th>{x.Heading}</th>
                    )
                })}
            </tr>
        </thead>
        <tbody>
            {dataSource.map((row,i)=>{
               return(
                <tr>
                    {cols.map((col , ind)=>{
                        return(
                            <td key={ind} >{row [col.key]}</td>
                        )
                    })}
                </tr>
               )
            })}
        </tbody>
    </table>
    )
}
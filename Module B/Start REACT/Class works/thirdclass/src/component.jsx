export default function Select(props) {
    const { options, label, getValue } = props
   return(
    <div>
        <p>{label}</p>
        <select name="" id="">
        {options && Array.isArray(options)&&options.map((x,i)=>{
            <option key={i} value={x.value} >
            {x.displayName}
            </option>
        })}</select>
    </div>
   )
}
const SelectInput = ({name, options, onChange})=>{
    return(
        <select name={name} id={name} onChange={onChange} className="w-full bg-primary border border-tertiary outline-none focus:outline-none p-2 rounded-xl" defaultValue={'---'}>
            <option value="---" disabled>---</option>
            {options.map((option) =>(
                <option key={option} value={option} className="bg-primary-dark">{option}</option>
            ))}
        </select>
    )
}

export default SelectInput;
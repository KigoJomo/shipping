const SelectInput = ({name, options, onChange})=>{
    return(
        <select name={name} id={name} onChange={onChange} className="w-full bg-tertiary border border-tertiary outline-none focus:outline-none py-2 px-4 rounded-xl " defaultValue={'---'}>
            <option className='text-white' value="---" disabled>---</option>
            {options.map((option) =>(
                <option key={option} value={option} className="">{option}</option>
            ))}
        </select>
    )
}

export default SelectInput;
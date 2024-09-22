import WarehouseIcon from '@mui/icons-material/Warehouse';

const WarehouseDetail = ({label, text}) =>{
    return (
        <div className="flex items-center gap-4">
            <p className='font-bold uppercase text-accent text-xs w-1/3'>{label}</p>
            <p className='w-2/3 uppercase text-accent text-xs'>{text ? text : '---'}</p>
        </div>
    )
}

const PhysicalAddress = ({ title, city, address, zip, state, phone_number})=>{
    return (
        <div className={`w-full md:w-64 p-4 flex flex-col gap-6 bg-tertiary rounded-3xl`}>
            <div className="w-full flex items-center gap-4 pb-2 border-b border-accent border-opacity-5">
                <WarehouseIcon />
                <h4 className="font-bold">{title}</h4>
            </div>

            <WarehouseDetail label="City" text={city}/>
            <WarehouseDetail label="Address" text={address}/>
            <WarehouseDetail label="Zip" text={zip}/>
            <WarehouseDetail label="State" text={state}/>
            <WarehouseDetail label="Phone Number" text={phone_number}/>
        </div>
    )
}

export default PhysicalAddress;
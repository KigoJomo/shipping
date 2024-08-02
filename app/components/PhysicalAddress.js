import CallIcon from "./CallIcon";
import LocationIcon from "./LocationIcon";

const PhysicalAddress = ({index, city, address, phone_number})=>{
    return (
        <div className={`w-full h-28 md:h-full border-t border-tertiary flex items-start ${index === 2 && 'border-b'}`}>
            <p className="capitalize w-1/3 mt-2 text-white">{city}</p>
            <div className="w-2/3 h-full flex flex-col">
                <div className="w-full h-1/2 flex items-start md:items-center gap-4 py-2">
                    <i className="h-5 flex items-end">
                        <LocationIcon />
                    </i>
                    <p className="capitalize space-grotesk">{address}</p>
                </div>
                <div className="w-full h-1/2 flex items-start md:items-center gap-4 py-2 border-t border-tertiary">
                    <i className="h-5 flex items-center">
                        <CallIcon />
                    </i>
                    <p className="capitalize space-grotesk">{phone_number}</p>
                </div>
            </div>
        </div>
    )
}

export default PhysicalAddress;
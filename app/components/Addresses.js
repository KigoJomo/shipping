import PhysicalAddress from './PhysicalAddress'

const shippingLocations = [
  {
    title: 'USA Air Warehouse',
    city: 'smyrna',
    address: '74 E Glenwood Ave Suite 5390-A-YOUR PHONE NUMBER',
    zip: '19977',
    state: 'Delaware',
    phone_number: '+254 727 905 390',
  },
  {
    title: 'USA Sea Warehouse',
    city: 'smyrna',
    address: '74 E Glenwood Ave Suite 5390-A-YOUR PHONE NUMBER',
    zip: '19977',
    state: 'Delaware',
    phone_number: '+254 727 905 390',
  },
  {
    title: 'China Air Warehouse',
    city: '',
    address:
      ' 广东省佛山市里水镇启梦芯华园A栋8号仓 Suite 5390-A-YOUR PHONE NUMBER',
    zip: '19977',
    state: '',
    phone_number: '+254 727 905 390',
  },
  {
    title: 'China Sea Warehouse',
    city: '',
    address:
      '广州市白云区江高镇双岗村广花四路268号南6A仓 Suite 5390-A-YOUR PHONE NUMBER',
    zip: '19977',
    state: '',
    phone_number: '+254 727 905 390',
  },
]

const Addresses = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <h3 className="mb-4 md:mb-12">where we are located</h3>
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
        {shippingLocations.map((location, index) => (
          <PhysicalAddress
            key={index}
            title={location.title}
            city={location.city}
            address={location.address}
            zip={location.zip}
            state={location.state}
            phone_number={location.phone_number}
          />
        ))}
      </div>
    </div>
  )
}

export default Addresses

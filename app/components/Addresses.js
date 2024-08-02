import PhysicalAddress from "./PhysicalAddress";

const shippingLocations = [
  {
    city: "Nairobi",
    address: "123 Shipping Lane, Nairobi, Kenya",
    phone_number: "+254 (794) 898678",
  },
  {
    city: "London",
    address: "456 Cargo Street, London, UK",
    phone_number: "+44 20 1234 5678",
  },
  {
    city: "New York",
    address: "789 Freight Avenue, New York, USA",
    phone_number: "+1 212-555-1234",
  },
];

const Addresses = () => {
  return (
    <div className="w-full md:w-1/2 h-[60vh] md:h-full md:pr-12 flex flex-col gap-0 justify-between overflow-hidden">
      <h3 className="mb-4 md:mb-12">where we are located</h3>
      {shippingLocations.map((location, index) => (
        <PhysicalAddress
          key={index}
          index={index}
          city={location.city}
          address={location.address}
          phone_number={location.phone_number}
        />
      ))}
    </div>
  );
};

export default Addresses;

import PhysicalAddress from "./PhysicalAddress";

const shippingLocations = [
  {
    city: "Nairobi",
    address: "Kalson Towers, Westlands, Nairobi,Kenya",
    phone_number: "+254 727 905 390",
  },
  {
    city: "Kampala",
    address: "coming soon",
    phone_number: " ",
  },
  {
    city: "Kigali",
    address: "coming soon",
    phone_number: " ",
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

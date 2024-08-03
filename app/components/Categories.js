// components/Categories.js
"use client";
import { useState, useEffect } from "react";
import ModalForm from "./ModalForm";
import CategoryItem from "./CategoryItem";
import FlyingPlane from "./FlyingPlane";
import LandShipping from "./LandShipping";
import SailingShip from "./SailingShip";

const FreightOptions = ["air", "sea", "road/rail"];

const Categories = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFreight, setSelectedFreight] = useState("");

  useEffect(() => {
    if (selectedFreight) {
      setModalOpen(true);
    }
  }, [selectedFreight]);

  const openModal = (freight) => {
    setSelectedFreight(freight);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedFreight("");
  };

  return (
    <>
      <section
        id="categories"
        className="md:pb-20 md:pt-32 gap-8 flex flex-col md:flex-row"
        style={{ perspective: "2500px" }}
      >
        <CategoryItem
          title="Air"
          AnimatedComponent={FlyingPlane}
          description="Fast and efficient transportation of goods by aircraft for long distances."
          bgColor="bg-tertiary"
          onClick={() => openModal(FreightOptions[0])}
        />
        <CategoryItem
          title="Sea"
          AnimatedComponent={SailingShip}
          description="Reliable and cost-effective shipping of large volumes of goods by sea."
          bgColor="bg-primary-dark"
          onClick={() => openModal(FreightOptions[1])}
        />
        <CategoryItem
          title="Land"
          AnimatedComponent={LandShipping}
          description="Convenient and flexible transportation of goods by road and rail."
          bgColor="bg-secondary"
          onClick={() => openModal(FreightOptions[2])}
        />
      </section>
      <ModalForm isOpen={isModalOpen} onClose={closeModal} freightOption={selectedFreight} />
    </>
  );
};

export default Categories;
